<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TimestampController;
use App\Http\Controllers\EditTimestamp;
use App\Http\Controllers\Guard;
use App\Http\Controllers\OnLeaveController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::resource('on-leave', OnLeaveController::class);
Route::get('slow-of-user/{id}', [OnLeaveController::class, 'listTimeSlow']);
Route::post('timestamp', [TimestampController::class, 'create']);
Route::get('timestamp', [TimestampController::class, 'getListTimestamp']);
Route::get('timestamp/{id}', [TimestampController::class, 'show']);
Route::get('time-of-user', [TimestampController::class, 'getTimeOfUser']);
Route::post('timestamp/update/{id}', [TimestampController::class, 'update']);
Route::post('create-edit-time', [TimestampController::class, 'createEditTime']);
Route::post('createTimeOfDayNoCheckIn', [TimestampController::class, 'createTimeOfDayNoCheckIn']);
Route::post('signUp', [Guard::class, 'signUp']);
Route::post('image-upload', [Guard::class, 'upload']);