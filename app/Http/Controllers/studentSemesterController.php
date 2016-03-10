<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use JWTAuth;
use DB;

class studentSemesterController extends Controller
{
    public function index()
    {
      $id = JWTAuth::parseToken()->getPayload()->get('id');

      $semesters = DB::table("marks")
                      ->select("semester")->distinct()->get();
      return $semesters;
    }
}
