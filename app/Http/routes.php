<?php

/*
|--------------------------------------------------------------------------
| Routes File
|--------------------------------------------------------------------------
|
| Here is where you will register all of the routes in an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('index');
});



/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| This route group applies the "web" middleware group to every route
| it contains. The "web" middleware group is defined in your HTTP
| kernel and includes session state, CSRF protection, and more.
|
*/

Route::group(['middleware' => ['web']], function () {
    //
});


Route::group(array('prefix' => 'api' ), function(){
    Route::resource('student', 'studentController');
    Route::resource('guardian', 'guardianController');
    Route::resource('staff', 'staffController');
    Route::resource('fee', 'feeController');
    Route::resource('examType', 'examTypeController');
    Route::resource('course', 'courseController');
    Route::resource('mark', 'markController');
    Route::resource('batch', 'batchController');
    Route::resource('gender', 'genderController');

    Route::resource('student.fee', 'studentFeeController');
});
