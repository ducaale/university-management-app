<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class mark extends Model
{
    protected $table = 'marks';

    protected $fillable = [
      'student_id',
      'course_id',
      'exam_type_id',
      'mark',
      'exam_date',
      'by_staff',
      'semester'
    ];

    public function student(){
      return $this->belongsTo('App\Student');
    }
}
