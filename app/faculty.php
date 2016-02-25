<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class faculty extends Model
{
    protected $table = 'faculty';

    protected $fillable = ['faculty_name'];
}
