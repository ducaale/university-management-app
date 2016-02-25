<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\Gender;

class genderTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      Model::unguard();

      $genders = array(
        ['gender_type' => 'male'],
        ['gender_type' => 'female']
      );

      foreach ($genders as $gender) {
        Gender::create($gender);
      }
    }
}
