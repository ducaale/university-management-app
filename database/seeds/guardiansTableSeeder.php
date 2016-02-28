<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\Guardian;

class guardiansTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      Model::unguard();

      $guardians = array(
        ['name' => 'cali ciise', 'tel'=> '123-123-456',
         'date_of_birth'=> date("Y-m-d")]

      );

      foreach ($guardians as $guardian) {
        Guardian::create($guardian);
    }
  }
}
