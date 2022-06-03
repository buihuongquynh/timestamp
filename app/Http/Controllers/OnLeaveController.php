<?php

namespace App\Http\Controllers;
use App\Models\On_leave;
use Illuminate\Http\Request;
use App\Http\Controllers\Base;

class OnLeaveController extends Base
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('on_leave.on_leave', ['title' => 'on_leave']);
    }
    public function getAll()
    {
        $data = On_leave::join('users', 'on_leave.user_id', '=', 'users.id')
            ->select('on_leave.*', 'users.name as username')
            ->paginate(13);
        return response()->json($data);

        // $data = On_leave::paginate(13);
        // return response()->json($data);
    }

    public function getPageList()
    {
        return view('on_leave.list', ['title' => 'on_leave_list']);
    }
    public function getPageEdit()
    {
        return view('on_leave.edit', ['title' => 'on_leave_edit']);
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       
        $request->validate([
            'user_id' => 'required'
          ]);
          
          $data = new On_leave([
            'user_id' => $request->get('user_id'),
            'is_slow' => $request->get('is_slow'),
            'start_day_off' => $request->get('start_day_off'),
            'end_day_off' => $request->get('end_day_off'),
            'reason' => $request->get('reason'),
          ]);
      
          $data->save();
      
          return response()->json($data);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data = On_leave::findOrFail($id);
        return response()->json($data);
    }
    public function listTimeSlow($id)
    {
        $data = On_leave::select("*")->where('user_id', $id)->paginate(13);
        return response()->json($data);
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
    public function update(Request $request, $id)
    {
        $data = On_leave::findOrFail($id);
        $data->start_day_off = $request->get('start_day_off');
        $data->end_day_off = $request->get('end_day_off');
        $data->reason = $request->get('reason');
        $data->save();
        return response()->json($data);
    }
    public function changeStatus($id)
    {
        $data = On_leave::findOrFail($id);
        $data->status = !$data->status;
        $data->save();
        return response()->json($data);
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = On_leave::findOrFail($id);
        $data->delete();
        return response()->json($data::all());
    }
}
