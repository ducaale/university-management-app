<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\Student;

class studentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      Model::unguard();

      $students = array(
        ['id_no' => '1', 'name' => 'muse cali', 'tel'=> '123-123-456',
         'enrollment_date' => date("Y-m-d"), 'date_of_birth'=> date("Y-m-d"),
         'guardians_id' => 1, 'user_id'=> 1]

      );

      foreach ($students as $student) {
        Student::create($student);
    }
}
