<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as ControllerHybrid;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Storage;

class Base extends ControllerHybrid
{
  public $user = false;

  public function __construct()
  {
    $this->middleware(function ($request, $next) {
      $auth = Auth::guard('web');
      if ($auth->check()) { 
        $this->user = $auth->user()->toArray();
      }
      $this->setup =json_decode(json_encode(\App\Models\Setup::get()), true);
      // dd( $this->setup);
      View::share(array(
        'user' => $this->user,
        'setup' => $this->setup,
      ), null, false);
        // dd($this->user);
      return $next($request);
    });
  }

  public function get_file($path, $id)
  {
    $file_name = Input::get('name');
    return Storage::download(Request::query('name'), $name, $headers);
    File::download(DOCROOT . 'save' . DS . 'secret' . DS . $path . DS . $id . DS . $file_name, $file_name);
    throw new Exception('Error Processing Request', 1);
  }
}