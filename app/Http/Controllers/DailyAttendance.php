<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Base;


class DailyAttendance extends Base
{
    //
    public function index()
    {
    
        return view('DailyAttendance.index', ['title' => 'Daily attendance']);
    }
}
