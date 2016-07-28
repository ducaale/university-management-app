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
      $exams;
      $marks;

      if (isset($semester) ) {
        $marks = DB::table('marks')
                    ->select('course_name', 'exam_type', 'mark')
                    ->join('courses', 'courses.id', '=', 'marks.course_id')
                    ->join('exam_types', 'exam_types.id', '=', 'marks.exam_type_id')
                    ->where('student_id', '=', $id)
                    ->where('semester', '=', $semester)
                    ->orderBy('course_name', 'asc')
                    ->get();

        $exams = DB::table('marks')
                    ->select('exam_type')
                    ->join('exam_types', 'exam_types.id', '=', 'marks.exam_type_id')
                    ->where('student_id', '=', $id)
                    ->where('semester', '=', $semester)
                    ->distinct()
                    ->get();
      }
      else {
        $marks = DB::table('marks')
                    ->select('course_name', 'exam_type', 'semester', 'mark')
                    ->join('courses', 'courses.id', '=', 'marks.course_id')
                    ->join('exam_types', 'exam_types.id', '=', 'marks.exam_type_id')
                    ->where('student_id', '=', $id)
                    ->orderBy('course_name', 'asc')
                    ->get();

        $exams = DB::table('marks')
                    ->select('exam_type')
                    ->join('exam_types', 'exam_types.id', '=', 'marks.exam_type_id')
                    ->where('student_id', '=', $id)
                    ->distinct()
                    ->get();

      }

      /**
       * process the $marks results into this format
       * {course_name: course, grades: {exam_type: score,.....}
       */

      $mark_array = array();
      $grade = array();
      $size = sizeOf($marks);

      if($size < 1) {
          $result['exam_types'] = '';
          $result['scores'] = '';
          return $result;
      }

      $next= $marks[1]->course_name;
      $i = 0;


      foreach ($marks as $mark) {

        $grade['course'] = $mark->course_name;
        $grade['grade'][$mark->exam_type] = $mark->mark;

        if( $i != $size - 1 ) {
          $next = $marks[$i + 1]->course_name;
        }

        if($mark->course_name != $next || $i == $size - 1) {
          array_push($mark_array, $grade);
          $grade = array();
        }

        $i++;
      }

      /**
       * transform $exams into array
       * exams: [ 'quiz', 'fullterm', .....]
       */
      $exam_array = array();
      foreach($exams as $exam) {
        array_push($exam_array, $exam->exam_type);
      }

      /**
       * combine examtypes and scores
       */
      $result = array();
      $result['exam_types'] = $exam_array;
      $result['scores'] = $mark_array;

      return $result;
    }
}
