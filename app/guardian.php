<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class guardian extends Model
{
  protected $fillable = [
    'name',
    'tel',
    'date_of_birth',
    'active'
  ];

  public function student(){
    return $this->hasMany('App\Student');
  }
}
