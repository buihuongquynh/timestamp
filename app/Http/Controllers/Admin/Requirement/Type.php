<?php

namespace App\Http\Controllers\Admin\Requirement;

use App\Http\Controllers\Admin\Base;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\DB;
use Exception;

class Type extends Base
{
  public function getList()
  {
    if (Request::ajax()) {
      $input = Request::query();

      $result = DB::table('part_types')
        ->orderBy('rank');

      // Search
      $this->search($input, $result);

      return response()->json([
        'draw' => $input['draw'],
        'recordsFiltered' => 100,
        'data' => $result
          ->limit(100)
          ->get()
      ]);
    }

    return view('admin.requirement.type.list', ['title' => '大項目管理 | 一覧']);
  }

  public function search($input, $query)
  {
    if ($input['search']['value']) {
      $query->where('name', 'LIKE', '%' . $input['search']['value'] . '%');
    }

    return $query;
  }

  public function getDetail($id = null)
  {
    $detail = ['id' => '', 'name' => '', 'icon' => '', 'rank' => 0];
    if (is_numeric($id)) {
      $detail = DB::table('part_types')
        ->select(array_keys($detail))
        ->where('id', '=', $id)
        ->first();
    }

    return view('admin.requirement.type.detail', ['title' => '大項目管理 | 詳細', 'detail' => $detail]);
  }

  public function postDetail($id = null)
  {
    $input = Request::post();
    $errors = [];

    try {
      DB::beginTransaction();

      $this->upload(['icon'], $input);

      if (is_numeric($id)) {
        DB::table('part_types')
          ->where('id', '=', $id)
          ->update($input);
      } else {
        DB::table('part_types')
          ->insert($input);
      }

      DB::commit();
    } catch (Exception $e) {
      DB::rollBack();
    }

    return response()->json([
      'errors' => $errors,
    ]);
  }

  public function deleteDetail($id)
  {
    $errors = [];

    // 使用状態をチェックする
    $count = DB::table('parts')
      ->where('type', '=', $id)
      ->count();

    if ($count > 0) {
      return response()->json(['errors' => ['' => 'パーツ管理で使用中になっているデータが削除できません。']]);
    }

    try {
      $detail = DB::table('part_types')
        ->where('id', '=', $id)
        ->first();

      $this->unlink(['icon'], $detail);

      DB::beginTransaction();

      DB::table('part_types')
        ->where('id', '=', $id)
        ->delete();

      DB::commit();
    } catch (Exception $e) {
      DB::rollBack();
      Log::error($e->getMessage());
    }

    return response()->json(['errors' => $errors]);
  }
}
