<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\Faculty;

class facultyTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        DB::table('faculty')->delete();

        $faculties = array(
          ['faculty_name' => 'Faculty of engineering'],
          ['faculty_name' => 'Faculty of computer science and IT']
        );

        foreach ($faculties as $faculty) {
          Faculty::create($faculty);
        }
    }
}
