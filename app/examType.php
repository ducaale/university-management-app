<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class examType extends Model
{
    protected $table = 'exam_types';

    protected $fillable = [
      'exam_type'
    ];
}
