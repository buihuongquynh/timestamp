<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;
use App\Models\Timestamp;
use App\Http\Controllers\Base;
use Carbon\Carbon;
use DateTime;

class TimestampController extends Base
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('timestamp.index', ['title' => 'タイムスタンプ']);
    }
    public function getAll()
    {
        $data = Timestamp::all();
        return response()->json($data);
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $ldate = Carbon::now();
        $timestamp = Timestamp::select("*")->where('user_id', $request['user_id'])->whereDate('checkin',$ldate)->get();
        if(count($timestamp) < 1){
            Timestamp::create($request->all());
            return response(['message' => 'success'], 200);
        }
        else return response(['message' => 'invalid id'], 404);
    }
    public function getListTimestamp(){
        // return response()->json(Timestamp::all());
        $data = DB::table('timestamps')
            ->select('checkin')
            ->get();
            $res = [];
            foreach ($data as $value)
                {
                    array_push($res,    
                      date("Y-m",strtotime($value->checkin))   
                );
                }
                
                return response()->json([
                    'data' => array_unique($res),
                ], 200);
    }
    public function getTimeOfUser(Request $request){
        // return response()->json(Timestamp::all());
        $user = DB::table('timestamps')
        ->where('user_id', $request['user_id'])
            ->where('checkin', 'like', '%'.$request['checkin'].'%')
        ->get();
        return $user;
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
        $data = Timestamp::findOrFail($id);
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
    public function update($id)
    {
        $ldate = Carbon::now();
        $timestamp = Timestamp::select("*")->where('user_id', $id)->whereDate('checkin',$ldate)->first();
        if ($timestamp === null ) {
            // if ($timestamp === null || $timestamp['checkout']  ) {
            return response()->json([
                'message' => 'Not found',
            ], 404);
        }
        Timestamp::select("*")->where('user_id', $id)->whereDate('checkin',$ldate)->first()->update(['checkout' => DB::raw('CURRENT_TIMESTAMP')]);
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
        $data = Timestamp::findOrFail($id);
        $data->delete();
        return response()->json($data::all());
    }
}
