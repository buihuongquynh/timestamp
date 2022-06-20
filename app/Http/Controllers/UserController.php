<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Base;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Base
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('profile.index', ['title' => 'profile']);
    }
    public function pageEdit()
    {
        return view('profile.edit', ['title' => 'edit profile']);
    }
    public function uploadAvatar(Request $request, $id){
        // $images = $request->file('image');
		// $imageName='';
		// foreach($images as $image)
		// {
		// 	$new_name = rand() . '.' . $image->getClientOriginalExtension();
		// 	$image->move(public_path('/uploads/images'), $new_name);
		// 	$imageName =$imageName . $new_name.",";
		// }
		// $imagedb=$imageName;
        // return response()->json($imagedb);
        $image = $request->file('image');
        if($request->hasFile('image')) {
            $new_name = rand() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('/uploads/images'), $new_name);
            DB::table('users')
                ->where("id", '=',  $id)
                ->update(
                    [
                        'avatar' => $new_name,
                    ]
                );
            return response()->json($new_name); 
        }else{
            return response()->json('image null');
        }
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
        $data = User::findOrFail($id);
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
        $data = User::findOrFail($id);
        $data->name = $request->get('name');
        $data->email = $request->get('email');
        $data->address = $request->get('address');
        $data->birthday = $request->get('birthday');
        $data->zalo = $request->get('zalo');
        $data->skype = $request->get('skype');
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
        //
    }
}
