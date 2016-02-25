<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class batch extends Model
{
    protected $table = 'batches';

    protected $fillable = [
      'batch_name', 'registered_at', 'department_id'
    ];

    public function setBatchNameAttribute($value){
      $this->attributes['batch_name'] = strtoupper($value);
    }
}
