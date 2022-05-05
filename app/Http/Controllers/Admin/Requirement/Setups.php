<?php

namespace App\Http\Controllers\Admin\Requirement;

use App\Http\Controllers\Admin\Base;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Exception;

class Setups extends Base
{
  public function getDetail()
  {
    $detail = DB::table('setups')->first();

    return view('admin.requirement.setups.detail', ['title' => '設定管理 | 詳細', 'detail' =>json_decode(json_encode($detail), true)]);
  }

  public function postDetail()
  {
    $input = Request::post();
    $errors = [];
    try {
      DB::beginTransaction();

      $this->upload(['campaign_img'], $input);
      DB::table('setups')
        ->where('id', '=', 1)
        ->update($input);

      DB::commit();
    } catch (Exception $e) {
      DB::rollBack();
      Log::error($e->getMessage());
    }

    return response()->json([
      'errors' => $errors,
    ]);
  }
}
