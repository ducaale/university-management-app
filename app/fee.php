<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class fee extends Model
{
    protected $table = 'fees';

    protected $fillable = [
      'amount',
      'type',
      'descr',
      'dept_or_credit',
      'student_id'
    ];

    public function student(){
      return $this->belongsTo('App\Student');
    }
}
