<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


class DailyAttendance extends Controller
{
    //
    public function index()
    {
    
        return view('DailyAttendance.index', ['title' => 'Daily attendance']);
    }
}
