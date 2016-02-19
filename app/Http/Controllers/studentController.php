<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Student;
use DB;
use App\Http\Requests\RegisterStudent;

class studentController extends Controller
{


    public function index(){
      $students = DB::table("students")->select(DB::raw("students.*"), 'batches.batch_name')->join('batches', 'batches.id', '=', 'batch_id')->where('active', '=', '1')->get();
      return $students;
    }

    public function show($id){
      $student = Student::findOrFail($id);
      return $student;
    }

    public function store(RegisterStudent $request){
      Student::create($request->all());
    }

    public function update($id, RegisterStudent $request){
      $student = Student::findOrFail($id);
      $student->update($request->all());
    }
}
