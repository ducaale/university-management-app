<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class course extends Model
{
    protected $table = 'courses';

    protected $fillable = [
      'coures_code',
      'course_name',
      'credits'
    ];
}
