<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Http\Requests\RecordAttendance;
use DB;
use App\Attendance;

class attendanceController extends Controller
{

    public function index()
    {
        $attendance = DB::table('attendence')
                        ->select('attendence.*','students.name','students.id')
                        ->join('students', 'students.id', '=', 'attendence.student_id')
                        ->get();

        return $attendance;
    }



    public function store(RecordAttendance $request)
    {
      Attendance::create($request->all());
    }


    public function show($id)
    {
        //
    }


    public function update(RecordAttendance $request, $id)
    {
        //
    }


    public function delete($id)
    {
        //
    }
}
