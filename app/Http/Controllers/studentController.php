<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Student;
use DB;
use Response;
use App\Http\Requests\RegisterStudent;

class studentController extends Controller
{


    public function index(){
      $students = DB::table("students")
                  ->select(DB::raw("students.*"), 'batches.batch_name')
                  ->join('batches', 'batches.id', '=', 'batch_id')
                  ->where('active', '=', '1')
                  ->get();
      return $students;
    }

    public function show($id){
      $student =  DB::table("students")
                  ->select(DB::raw("students.*"), 'batches.batch_name', 'guardians.name as guardian', 'guardians.tel as guardian_tel')
                  ->join('batches', 'batches.id', '=', 'batch_id')
                  ->join('guardians', 'guardians.id', '=', 'guardians_id')
                  ->where('students.id', $id)
                  ->first();
      return Response::json($student);
    }

    public function store(RegisterStudent $request){
      Student::create($request->all());
    }

    public function update($id, RegisterStudent $request){
      $student = Student::findOrFail($id);
      $student->update($request->all());
    }
}
