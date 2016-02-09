<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Guardian;
use App\Http\Requests\RegisterGuardian;

class guardianController extends Controller
{
   public function index(){
     $guardian = Guardian::all()->toArray();
     return $guardian;
}
    public function store(RegisterGuardian $request){
      Guardian::create($request->all());
    }
}
