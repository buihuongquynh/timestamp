<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuController;
use App\Http\Controllers\TimestampController;
use App\Http\Controllers\DailyAttendance;
use App\Http\Controllers\Admin\Standard\User;
use App\Http\Controllers\Admin\Standard\Moderator;
use App\Http\Controllers\Admin\Requirement\Type;
use App\Http\Controllers\Admin\Requirement\Review;
use App\Http\Controllers\Admin\Requirement\Setups;
use App\Http\Controllers\Guard;
use App\Http\Controllers\Admin\GuardAdmin;


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

Route::get('/timestamp', [TimestampController::class, 'index'])->middleware('validate_token');
// Route::get('/works', [DailyAttendance::class, 'index']);
Route::get('/works', [DailyAttendance::class, 'index']);
Route::get('/login', [Guard::class, 'index']);
Route::post('/login', [Guard::class, 'Login']);
Route::get('/00abloginuser/logout',[Guard::class, 'getLogout']);
Route::get('/admin/login', [GuardAdmin::class, 'index']);
Route::post('/admin/login', [GuardAdmin::class, 'Login']);
Route::group(['prefix' => 'admin'], function () {
    Route::get('guard/logout',[GuardAdmin::class, 'getLogout']);
    Route::get('standard/user/list', [User::class, 'getList']);
    Route::get('standard/user/detail/{id}', [User::class, 'getDetail']);
    Route::post('standard/user/detail/{id}',[User::class, 'postDetail']);
    Route::delete('standard/user/detail/{id}',[User::class, 'deleteDetail']);
    Route::get('standard/user/new',[User::class, 'getNew']);
    Route::post('standard/user/new',[User::class, 'postNew']);
    Route::get('standard/user/copy/{id}',[User::class, 'getCopy']);
    Route::post('standard/user/copy/{id}',[User::class, 'postCopy']);

    // Route::get('standard/home', [Moderator::class, 'postCopy']);
    Route::get('standard/moderator/list', [Moderator::class, 'getList']);
    Route::get('standard/moderator/detail/{id}', [Moderator::class, 'getDetail']);
    Route::post('standard/moderator/detail/{id}', [Moderator::class, 'postDetail']);
    Route::delete('standard/moderator/detail/{id}', [Moderator::class, 'deleteDetail']);
    Route::get('standard/moderator/new', [Moderator::class, 'getNew']);
    Route::post('standard/moderator/new', [Moderator::class, 'postNew']);
    Route::get('standard/moderator/copy/{id}',[Moderator::class, 'getCopy']);
    Route::post('standard/moderator/copy/{id}', [Moderator::class, 'postCopy']);

    Route::get('requirement/type/list', [Type::class, 'getList']);
    Route::get('requirement/type/detail/{id}', [Type::class, 'getDetail']);
    Route::post('requirement/type/detail/{id}', [Type::class, 'postDetail']);
    Route::delete('requirement/type/detail/{id}', [Type::class, 'deleteDetail']);
    Route::get('requirement/type/new', [Type::class, 'getNew']);
    Route::post('requirement/type/new', [Type::class, 'postNew']);
    Route::get('requirement/type/copy/{id}', [Type::class, 'getCopy']);
    Route::post('requirement/type/copy/{id}', [Type::class, 'postCopy']);

    Route::get('requirement/review/list', [Review::class, 'getList']);
    Route::get('requirement/review/detail/{id}', [Review::class, 'getDetail']);
    Route::post('requirement/review/detail/{id}', [Review::class, 'postDetail']);
    Route::delete('requirement/review/detail/{id}', [Review::class, 'deleteDetail']);
    Route::get('requirement/review/new', [Review::class, 'getNew']);
    Route::post('requirement/review/new', [Review::class, 'postNew']);
    Route::get('requirement/review/copy/{id}', [Review::class, 'getCopy']);
    Route::post('requirement/review/copy/{id}', [Review::class, 'postCopy']);

    Route::get('requirement/setups/detail', [Setups::class, 'getDetail']);
  Route::post('requirement/setups/detail', [Setups::class, 'postDetail']);
});