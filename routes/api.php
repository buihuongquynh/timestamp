<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TimestampController;
use App\Http\Controllers\EditTimestamp;

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
Route::post('timestamp', [TimestampController::class, 'create']);
Route::get('timestamp', [TimestampController::class, 'getListTimestamp']);
Route::get('timestamp/{id}', [TimestampController::class, 'show']);
Route::get('time-of-user', [TimestampController::class, 'getTimeOfUser']);
Route::post('timestamp/update/{id}', [TimestampController::class, 'update']);
Route::post('create-edit-time', [TimestampController::class, 'createEditTime']);

