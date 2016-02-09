<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Batch;
use App\Http\Requests\RegisterBatch;

class batchController extends Controller
{
    public function index() {
      $batch = Batch::all()->toArray();
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
