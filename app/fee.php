<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class fee extends Model
{
    protected $table = 'fees';

    protected $fillable = [
      'student_id',
      'amount',
      'type',
      'descr',
      'dept_or_credit',
    ];

    public function student(){
      return $this->belongsTo('App\Student');
    }
}
