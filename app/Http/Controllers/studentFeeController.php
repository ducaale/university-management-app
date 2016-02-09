<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use DB;
use App\Student;
use App\Http\Requests\makeTransaction;

class studentFeeController extends Controller
{
    public function index($student_id){
      $studentFee = DB::table(DB::raw('(select id as ref, student_id, amount as debit, 0 as credit,
                                      created_at as date, descr, type
                                      from fees where dept_or_credit = "d"
                                      UNION ALL
                                      select id as ref, student_id, 0 as debit, amount as credit,
                                      created_at as date, descr, type
                                      from fees where dept_or_credit = "c") as d'))
                      ->select('ref', 'date', 'type','debit', 'credit','descr')
                      ->join('students', 'student_id', '=', 'students.id')
                      ->where('id', $student_id)
                      ->get();

      return $studentFee;
    }

    public function store($student_id, makeTransaction $request){
      $student = Student::findOrFail($student_id);
      $student->fees()->save($request->all());
    }
}
