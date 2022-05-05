<?php

namespace App\Http\Controllers\Admin\Requirement;

use App\Http\Controllers\Admin\Base;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Exception;

class Review extends Base
{
  public function getList()
  {
    if (Request::ajax()) {
      $input = Request::query();
      $result = DB::table('reviews')
        ->orderBy('updated_at');

      // Search
      $this->search($input, $result);

      return response()->json([
        'draw' => $input['draw'],
        'recordsFiltered' => $result->count(),
        'data' => $result
          ->limit(100)
          ->get()
      ]);
    }
    return view('admin.requirement.review.list', ['title' => 'レビュー管理 | 一覧']);
  }

  public function search($input, $query)
  {
    if ($input['search']['value']) {
      $query
        ->where(function ($query) use ($input) {
          $query->where('name', 'LIKE', '%' . $input['search']['value'] . '%')
            ->orWhere('admin_name', 'LIKE', '%' . $input['search']['value'] . '%');
        });
    }

    return $query;
  }

  public function getDetail($id = null)
  {
    $detail = [];
    if (is_numeric($id)) {
      $detail = DB::table('reviews')
        ->where('id', '=', $id)
        ->first();

      $detail['img'] = json_decode($detail['img'], true);
    }
    $packages = DB::table('packages')->get();
    return view('admin.requirement.review.detail', ['title' => 'レビュー管理 | 詳細', 'detail' => $detail, 'packages' => $packages]);
  }

  public function postDetail($id = null)
  {
    $input = Request::post();
    $errors = [];
    try {
      DB::beginTransaction();

      $input['img'] = $this->uploadMulti(['img1', 'img2', 'img3', 'img4', 'img5'], $input);
      if (is_numeric($id)) {
        DB::table('reviews')
          ->where('id', '=', $id)
          ->update($input);
      } else {
        DB::table('reviews')
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

    try {
      $detail = DB::table('reviews')
        ->where('id', '=', $id)
        ->first();

      $this->unlinkMulti(['img'], $detail);

      DB::beginTransaction();

      DB::table('reviews')
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
