<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class staff extends Model
{

  protected $table = 'staffs';
  protected $fillable = [
    'name',
    'tel',
    'enrollment_date',
    'date_of_birth',
    'active'
  ];
}
