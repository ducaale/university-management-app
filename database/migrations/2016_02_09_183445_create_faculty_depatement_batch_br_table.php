<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFacultyDepatementBatchBrTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('faculty_department_batch_br', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('faculty_id')->unsigned();
            $table->integer('department_id')->unsigned();
            $table->integer('batch_id')->unsigned();
            $table->timestamps();

            $table->foreign('faculty_id')
                  ->references('id')
                  ->on('faculty')
                  ->onDelete('cascade');

            $table->foreign('department_id')
                  ->references('id')
                  ->on('departments')
                  ->onDelete('cascade');

                  $table->foreign('batch_id')
            ->references('id')->on('batches')
            ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('faculty_department_batch_br');
    }
}
