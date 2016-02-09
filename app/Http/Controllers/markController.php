<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use DB;
use App\Mark;
use Illuminate\Support\Facades\Input;

use App\Http\Requests\RecordMark;

class markController extends Controller
{
    public function index(){
      $marks = DB::table('marks')
                  ->select('marks.id','students.id as student_id','name','batch', 'course_name', 'course_id', 'exam_type', 'exam_type_id',  'mark' )
                  ->join('courses', function($join) {
                    $join->on('course_id', '=', 'courses.id')->where('course_id','=', Input::get('course_id'));
                  })
                  ->join('exam_types', function($join) {
                    $join->on('exam_type_id', '=', 'exam_types.id')->where('exam_type_id', '=', Input::get('exam_type_id'));
                  })
                  ->rightjoin('students', 'students.id', '=', 'student_id')
                  ->where('students.batch','=', Input::get('batch'))
                  ->get();
      return $marks;
    }

    public function store(RecordMark $request){
      Mark::create($request->all());

    }

    public function show($id){
      $mark = Mark::findOrFail($id);
      return $mark;
    }

    public function update(RecordMark $request, $id){
      $mark = Mark::findOrFail($id);
      $mark->update($request->all());
    }

    public function delete($id){
      $mark = Mark::findOrFail($id);
      $mark->delete();
    }
}
