<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\User;

class userTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      Model::unguard();

      DB::table('users')->delete();

      $users = array(
             ['user_name' => 'bcs1-12', 'password' => Hash::make('secret'), 'role' => 'student'],
             ['user_name' => 'be6-36', 'password' => Hash::make('secret'), 'role' => 'student'],
             ['user_name' => 'xaamud23', 'password' => Hash::make('secret'), 'role' => 'admin']
      );

      // Loop through each user above and create the record for them in the database
     foreach ($users as $user)
      {
          User::create($user);
      }

     Model::reguard();

    }
}
