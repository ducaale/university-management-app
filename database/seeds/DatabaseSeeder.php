<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        $this->call(facultyTableSeeder::class);
        $this->call(departmentTableSeeder::class);
        $this->call(batchesTableSeeder::class);
        $this->call(guardiansTableSeeder::class);
        $this->call(genderTableSeeder::class);
        $this->call(userTableSeeder::class);
        $this->call(studentsTableSeeder::class);

        Model::reguard();
    }
}
