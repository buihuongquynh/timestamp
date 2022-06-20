<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;
use App\Models\Timestamp;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Base;

class Guard extends Base
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    $auth = Auth::guard('web');
    if ($auth->check()) {
      return redirect('/');
    }
    return view('login', ['title' => 'login']);
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function Login(Request $request)
  {
    $auth = Auth::guard('web');
    $credentials = [
      'email' => $request->input('email'),
      'password' => $request->input('password')
    ];
    if ($auth->attempt($credentials)) {
      if ($request->query('ref')) {
        return "123";
      } else {
        return redirect('timestamp');
      }
    } else {
      return redirect('login');
    }
  }
  public function getLogout()
  {
    auth()->guard('web')->logout();
    \Session::flush();
    return redirect('login');
  }
  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function signUp(Request $request)
  {
    // Validate the inputs
    $request->validate([
      'name' => 'required',
    ]);
    // ensure the request has a file before we attempt anything else.
    $request->validate([
      'image' => 'mimes:jpeg,bmp,png,jpg' // Only allow .jpg, .bmp and .png file types.
    ]);

    // Save the file locally in the storage/public/ folder under a new folder named /product
    $request->file->store('users', 'public');

    // Store the record, using the new file hashname which will be it's new filename identity.
    $user = new User([
      "name" => $request->get('name'),
      "email" => $request->get('email'),
      "prefecture" => $request->get('prefecture'),
      "address" => $request->get('address'),
      "birthday" => $request->get('birthday'),
      "avatar" => $request->file->hashName()
    ]);
    $user->save(); // Finally, save the record.


    return ("succers!");
  }
  public function upload(Request $request)
  {
    $images = $request->file('image');
    $imageName = '';
    foreach ($images as $image) {
      $new_name = rand() . '.' . $image->getClientOriginalExtension();
      $image->move(public_path('/uploads/images'), $new_name);
      $imageName = $imageName . $new_name . ",";
    }
    $imagedb = $imageName;
    return response()->json($imagedb);
  }
  /**
   * Display the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function show($id)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function edit($id)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update($id)
  {
    $timestamp = Timestamp::find($id);
    if ($timestamp === null) {
      return response()->json([
        'message' => 'Not found',
      ], 404);
    }
    DB::table('timestamps')->where('id', $id)->update(['checkout' => DB::raw('CURRENT_TIMESTAMP')]);
    return response()->json([
      $timestamp
    ]);
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy($id)
  {
    //
  }
}
