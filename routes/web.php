<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuController;
use App\Http\Controllers\TimestampController;
use App\Http\Controllers\Guard;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/login', function () {
    return view('template');
});// Route::get('/login', 'Login@getIndex');
Route::get('/timestamp', [TimestampController::class, 'index'])->middleware('validate_token');
Route::get('/login', [Guard::class, 'index']);
Route::post('/login', [Guard::class, 'Login']);
Route::get('/00abloginuser/logout',[Guard::class, 'getLogout']);
