<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Input;
use JWTAuth;
use DB;

class studentMarkController extends Controller
{
    public function index()
    {
      $id = JWTAuth::parseToken()->getPayload()->get('id');

      if(JWTAuth::parseToken()->getPayload()->get('role') != 'student'){
        return;
      }

      $semester = Input::get('semester');
      $examType = Input::get('examType');
      $marks;


      if (isset($semester) ) {
        $marks = DB::table('marks')
                    ->select('student_id', 'course_name', 'exam_type', 'semester', 'mark')
                    ->join('courses', 'courses.id', '=', 'marks.course_id')
                    ->join('exam_types', 'exam_types.id', '=', 'marks.exam_type_id')
                    ->where('student_id', '=', $id)
                    ->where('semester', '=', $semester)
                    ->get();

      }
      else {
        $marks = DB::table('marks')
                    ->select('student_id', 'course_name', 'exam_type', 'semester', 'mark')
                    ->join('courses', 'courses.id', '=', 'marks.course_id')
                    ->join('exam_types', 'exam_types.id', '=', 'marks.exam_type_id')
                    ->where('student_id', '=', $id)
                    ->get();

      }

      return $marks;
    }
}
