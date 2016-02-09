<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\ExamType;
use App\Http\Requests\RegisterExamType;

class examTypeController extends Controller
{
    public function index(){
      $examType = ExamType::all()->toArray();
      return $examType;
    }

    public function store(RegisterExamType $request){
      ExamType::create($request->all());
    }

    public function update($id, RegisterExamType $request){
      $examType = ExamType::findOrFail($id);
      $examType->update($request->all());
    }

    public function delete($id){
      $examType = ExamType::findOrFail($id);
      $examType->delete();
    }
}
