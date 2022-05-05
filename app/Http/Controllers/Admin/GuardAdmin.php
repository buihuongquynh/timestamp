<?php

namespace App\Http\Controllers\Admin;
use Illuminate\Support\Facades\DB;
use Illuminate\Routing\Controller as ControllerHybrid;
use Illuminate\Http\Request;
use App\Models\Timestamp;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Admin\Base;

class GuardAdmin extends ControllerHybrid
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response        
     */
    public function index()
    {
        $auth = Auth::guard('admin');
        if ($auth->check()) {
            return redirect('admin/standard/users');
        }
        return view('admin/guard/login', ['title' => 'login']);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function Login(Request $request)
    {
        $auth = Auth::guard('admin');
        $credentials = [
            'email' => $request->input('email'),
            'password' => $request->input('password')
          ];
          if ($auth->attempt($credentials)) {
            if ($request->query('ref')) {
              return "123";
            } else {
              return redirect('admin/standard/user/list');
            }
          } else {
            return redirect('admin/login');
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
    public function store(Request $request)
    {
        //
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
        DB::table('timestamps') ->where('id', $id) ->update(['checkout' => DB::raw('CURRENT_TIMESTAMP')]);
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
