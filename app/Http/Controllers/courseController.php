<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Course;
use App\Http\Requests\RegisterCourse;

class courseController extends Controller
{
    public function index(){
      $course = Course::all()->toArray();
      return $course;
    }

    public function store(RegisterCourse $request){
      Course::create($request->all());
    }

    public function update($id, RegisterCourse $request){
      $course = Course::findOrFail($id);
      $course->update($request->all());
    }

    public function delete($id){
      $course = Course::findOrFail($id);
      $course->delete();
    }
}
