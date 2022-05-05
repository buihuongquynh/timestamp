<?php

namespace App\Http\Controllers\Admin\Standard;

use App\Http\Controllers\Admin\Base;

class Home extends Base
{
  public function getIndex()
  {
    return view('admin.standard.home.index', ['title' => 'ホーム']);
  }
}
