<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use DB;
use App\Http\Requests\RegisterBatch;

class batchController extends Controller
{
    public function index() {
      $batch = DB::table('faculty')
                  ->select('batches.id','batches.batch_name','batches.registered_at','departments.department_name','faculty.faculty_name')
                  ->join('departments', 'departments.faculty_id', '=', 'faculty.id')
                  ->join('batches', 'batches.department_id', '=', 'departments.id')
                  ->get();
      return $batch;
    }

    public function store(RegisterBatch $request) {
      Batch::create($request->all());
    }

    public function update($id, RegisterBatch $request) {
      $batch = Batch::findOrFail($id);
      $batch->update($request->all());
    }

    public function delete($id) {
      $batch = Batch::findOrFail($id);
      $batch->delete();
    }
}
