<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use DB;
use App\Fee;
use App\Http\Requests\makeTransaction;

class feeController extends Controller
{


   public function index(){
     $fees = DB::table(DB::raw('(select student_id, amount as debit, 0 as credit
                                from fees where dept_or_credit = "d"
                                UNION ALL
                                select student_id, 0 as debit, amount as credit
                                from fees where dept_or_credit = "c") as d'))
                ->select('student_id', 'name', DB::raw('sum(debit) as debit'),
                          DB::raw('sum(credit) as credit'),
                          DB::raw('sum(debit)-sum(credit) as balance'))
                ->join('students', 'student_id', '=','students.id')
                ->groupBy('student_id')
                ->get();

      return $fees;
   }

    public function store(makeTransaction $request){
      Fee::create($request->all());
    }

}
