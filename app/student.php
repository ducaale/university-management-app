<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class student extends Model
{

    protected $fillable = [
      'id_no',
      'name',
      'tel',
      'batch',
      'enrollment_date',
      'date_of_birth',
      'active',
      'guardians_id'
    ];

    public function guardian(){
      return $this->belongsTo('App\Guardian');
    }

    public function fees(){
      return $this->hasMany('App\Fee');
    }

    public function mark(){
      return $this->hasMany('App\Mark');
    }
}
