<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\Batch;

class batchesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        $batches = array(
          ['batch_name' => 'BE6', 'department_id' => '1'],
          ['batch_name' => 'BE5', 'department_id' => '1'],
          ['batch_name' => 'BT5', 'department_id' => '2'],
          ['batch_name' => 'BCS1', 'department_id' => '3']
        );

        foreach ($batches as $batch) {
          Batch::create($batch);
        }
    }
}
