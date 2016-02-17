<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class authenticateController extends Controller
{

    public function authenticate(Request $request)
    {
      $credentials = $request->only('email','password');

      try{
        //verify credentials and return token
        if(! $token = JWTAuth::attempt($credentials)) {
          return response()->json(['error' => 'invalid_credentrials'], 401);
        }
      } catch(JWTException $e){
        //something went wrong
        return response()->json(['error' => 'could_not_create_token'], 500);
      }

      //no errors token is returned
      return response()->json(compact('token'));
    }
}
