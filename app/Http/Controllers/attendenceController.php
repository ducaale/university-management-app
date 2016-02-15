<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Http\Requests\RecordAttendence;
use DB;

class attendenceController extends Controller
{

    public function index()
    {
        $attendence = DB::table('attendence')
                        ->select('attendence.*','students.*')
                        ->join('students', 'students.id', '=', 'attendence.student_id')
                        ->get();

        return $attendence;
    }



    public function store(RecordAttendence $request)
    {
        //
    }


    public function show($id)
    {
        //
    }


    public function update(RecordAttendence $request, $id)
    {
        //
    }


    public function delete($id)
    {
        //
    }
}
