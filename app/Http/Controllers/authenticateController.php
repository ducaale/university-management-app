<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Illuminate\Support\Facades\Hash;

use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;

use DB;
use App\User;

class authenticateController extends Controller
{

    public function authenticate(Request $request)
    {
      $credentials = $request->only('user_name','password');

      // search user from multiple tables
      $user = DB::table(DB::raw('(select id, user_id from students union select id, user_id from staffs) as a'))
                                   ->select('a.id', 'users.role')
                                   ->rightjoin('users','users.id','=','a.user_id')
                                   ->where('user_name', '=', $request->input('user_name'))->first();

      if(count($user) == 1){
        $user = array('id' => $user->id, 'role' => $user->role);
      }else {
        $user = array();
      }

      try{
        //verify credentials and return token
        if(! $token = JWTAuth::attempt($credentials, $user)) {
          return response()->json(['error' => 'invalid_credentrials'], 401);
        }
      } catch(JWTException $e){
        //something went wrong
        return response()->json(['error' => 'could_not_create_token'], 500);
      }

      //no errors token is returned
      return response()->json(compact('token'));
    }

    public function getAuthenticatedUser()
    {
      try {
        if(! $user = JWTAuth::parseToken()->authenticate()) {
          return response()->json(['user_not_found'], 404);
        }

      } catch(TokenExpiredException $e) {
          return response()->json(['token_expired'], $e->getStatusCode());
      } catch (JWTException $e) {
          return response()->json(['token_absent'], $e->getStatusCode());
      }

      $user = DB::table(DB::raw('(select id, name, user_id from students union select id, name,user_id from staffs) as a'))
                                   ->select('a.id', 'a.name', 'users.role')
                                   ->rightjoin('users','users.id','=','a.user_id')
                                   ->where('users.id', '=', $user->id)->first();
        //token is valid and user is found
        return response()->json(compact('user'));
    }

    public function register(Request $request)
    {
      $newUser = $request->all();
      $password = Hash::make($request->input('password'));
      $newUser['password'] = $password;
      User::create($newUser);
    }

}
