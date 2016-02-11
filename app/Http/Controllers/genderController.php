<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Gender;

class genderController extends Controller
{
    public function index(){
      $gender = Gender::all()->toArray();
      return $gender;
    }
}
