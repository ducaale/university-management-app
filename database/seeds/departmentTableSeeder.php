<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\Department;

class departmentTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        DB::table('Departments')->delete();

        $departments = array(
          ['department_name' => 'department of electrical and power engineering', 'faculty_id' => '1'],
          ['department_name' => 'department of electrical and telcom engineering', 'faculty_id' => '1'],
          ['department_name' => 'department of computer science', 'faculty_id' => '2']
        );

        foreach ($departments as $department) {
          Department::create($department);
        }
    }
}
