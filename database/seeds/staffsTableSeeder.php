<?php

use Illuminate\Database\Seeder;
use App\Staff;

class staffsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $staffs = array(
          ['name' => 'maxamed xaamud', 'tel' => '123-123-234', 'user_id' => '3']
        );

        foreach ($staffs as $staff) {
          Staff::create($staff);
        }
    }
}
