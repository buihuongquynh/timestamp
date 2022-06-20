<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


class AuController extends Controller
{
  public function getIndex()
  {
    return view('login', ['title' => 'login']);
  }
}
