<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStudentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('students', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('id_no')->unsigned();
            $table->string('name');
            $table->string('tel')->nullable();
            $table->date('enrollment_date');
            $table->date('date_of_birth');
            $table->integer('guardians_id')->unsigned();
            $table->integer('user_id')->unsigned()->nullable();
            $table->boolean('active')->default(true);
            $table->timestamps();

            $table->unique('id_no');

            $table->foreign('guardians_id')
                  ->references('id')
                  ->on('guardians');

            $table->foreign('user_id')
                  ->references('id')
                  ->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('students');
    }
}
