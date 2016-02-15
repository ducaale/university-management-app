<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class attendence extends Model
{
    protected $table = "attendence";

    protected $fillable = [
      'student_id',
      'notes'
    ];
}
