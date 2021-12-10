<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\userController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('register', [AuthController::class,'register']);
    Route::match(array('GET', 'POST'),"login", [AuthController::class,'login'])->name('login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', [AuthController::class ,'me']);

});

Route::group(['middleware' =>['apiJWT'],'prefix' => 'profile'], function(){
   Route::get('users' , [userController::class,'index'] )->name('users');
   Route::prefix('/tasks')->group(function(){
    Route::get('/' , [TaskController::class, 'index']);
    Route::get('/search' , [TaskController::class, 'search']);
    Route::post('register' , [TaskController::class, 'store'])->middleware('checkFields');
    Route::put(  'update/{id}' , [TaskController::class, 'update'])->middleware('checkFields');
    Route::delete('delete/{id}' , [TaskController::class, 'destroy']);
});
});


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
