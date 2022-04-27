<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Login extends Controller
{
    public function getIndex()
  {
    return view('login', ['title' => 'login']);
  }
}
