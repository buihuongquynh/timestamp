<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Base;
use Illuminate\Http\Request;

class EditTimestamp extends Base
{
    public function index()
    {
        return view('DailyAttendance.edit', ['title' => 'edit']);
    }
}
