<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Staff;
use App\Http\Requests\RegisterStaff;

class staffController extends Controller
{
    public function index(){
      $staff = Staff::all()->toArray();
      return $staff;
    }

    public function show($id){
      $staff = Staff::findOrFail($id);
      return $staff;
    }

    public function store(RegisterStaff $request){
      Staff::create($request->all());
    }

    public function update($id, RegisterStaff $request){
      $staff = Staff::findOrFail($id);
      $staff->update($request->all());
    }
}
