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
      $total;
      $average;

      if (isset($semester) ) {
        $marks = DB::table('marks')
                    ->select('course_name', 'exam_type', 'mark')
                    ->join('courses', 'courses.id', '=', 'marks.course_id')
                    ->join('exam_types', 'exam_types.id', '=', 'marks.exam_type_id')
                    ->where('student_id', '=', $id)
                    ->where('semester', '=', $semester)
                    ->orderBy('course_name', 'asc')
                    ->get();

        $total = DB::table('marks')
                    ->select('mark')
                    ->where('student_id', '=', $id)
                    ->where('semester', '=', $semester)
                    ->sum('mark');
        
        $average = DB::table('marks')
                    ->select('mark')
                    ->where('student_id', '=', $id)
                    ->where('semester', '=', $semester)
                    ->avg('mark');

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

        $total = DB::table('marks')
                    ->select('mark')
                    ->where('student_id', '=', $id)
                    ->sum('mark');

        $average = DB::table('marks')
                    ->select('mark')
                    ->where('student_id', '=', $id)
                    ->avg('mark');

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
      $course_total = 0;
      $size = sizeOf($marks);

      if($size < 1) {
          $result['exam_types'] = []; 
          $result['scores'] = [];
          return $result;
      }

      if($size == 1) {
        $next = $marks[0]->course_name;
      }
      else {
        $next= $marks[1]->course_name;
      }

      $i = 0;
      foreach ($marks as $mark) {

        $grade['course'] = $mark->course_name;
        $grade['grade'][$mark->exam_type] = $mark->mark;

        $course_total += $mark->mark;

        if( $i != $size - 1 ) {
          $next = $marks[$i + 1]->course_name;
        }

        if($mark->course_name != $next || $i == $size - 1) {

          $grade['grade']['total'] = $course_total;
          array_push($mark_array, $grade);

          $grade = array();
          $course_total = 0;
        }

        $i++;
      }


      //show $average up to 2 decimal places
      $average = (string) round($average, 2) . '%';
      
      // add average and total
      array_push($mark_array, array( 'course' => 'Total', 'grade' => array('total' => $total) )); 
      array_push($mark_array, array( 'course' => 'Average', 'grade' => array('total' => $average) )); 

      /**
       * transform $exams into array
       * exams: [ 'quiz', 'fullterm', .....]
       */
      $exam_array = array();
      foreach($exams as $exam) {
        array_push($exam_array, $exam->exam_type);
      }
      array_push($exam_array, 'total');

      /**
       * combine examtypes and scores
       */
      $result = array();
      $result['exam_types'] = $exam_array;
      $result['scores'] = $mark_array;

      return $result;
    }
}
