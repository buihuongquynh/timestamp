<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Base;
use Illuminate\Http\Request;
use App\Models\Editing_time;
use App\Models\Timestamp;
use Illuminate\Support\Facades\DB;

class EditTimestamp extends Base
{
    public function index()
    {
        return view('DailyAttendance.edit', ['title' => 'edit']);
    }
    public function getEditTimse(Request $request)
    {
        $validated = $request->validate([
            'timestamp_id' => 'required',
        ]);
        $data = Editing_time::select("*")->where('timestamp_id', $request['timestamp_id'])->get();
        return response()->json([
            'data' =>$data,
        ], 200);
    }
    public function createEditTime(Request $request)
    {   
        $validated = $request->validate([
        'timestamp_id' => 'required',
    ]);
    $time = Timestamp::select("*")->where('id', $request['timestamp_id'])->first();
        if(!$request['checkin'] && !$request['checkout']){
            return response(['message' => 'error'], 420);
        }
        else{
            if(!$request['checkin']){
                DB::table('editing_times')->insert([
                    'checkin' => $time["checkin"],
                    'checkout' => $request["checkout"],
                    'timestamp_id' => $request["timestamp_id"]
                ]);
                return response(['message' => 'success'], 200);

            }
            else if(!$request['checkout']){
                DB::table('editing_times')->insert([
                    'checkin' => $request["checkin"],
                    'checkout' => $time["checkout"],
                    'timestamp_id' => $request["timestamp_id"]
                ]);
                return response(['message' => 'success'], 200);
            }

            else{
                Editing_time::create($request->all());
            }
        }
        
    }
    public function destroy($id)
    {
        $data = Editing_time::findOrFail($id);
        $data->delete();
        return response()->json($data::all());
    }
    
}
