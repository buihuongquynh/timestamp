<?php

namespace App\Http\Controllers\Admin\Leave;

use App\Http\Controllers\Admin\Base;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Exception;

class Leave extends Base
{
    public function getPageList()
    {
        return view('admin.Leave.list', ['title' => 'Leave list']);
    }
}
