@extends('admin.template')
@section('content')
<form id="detail-form">
  <div class="card card-default">
    <div class="card-header">
      <h3 class="card-title">基本設定</h3>

      <div class="card-tools">
        <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i></button>
      </div>
    </div>
    <!-- /.card-header -->
    <div class="card-body">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="name">名前</label>
            <span class="float-right badge badge-danger">必須</span>
            <input value="<?php echo $detail['name']; ?>" type="text" name="name" class="form-control" id="name" placeholder="例：ＭＣ" required>
          </div>
          <div class="form-group">
            <label for="name">順番</label>
            <span class="float-right badge badge-danger">必須</span>
            <input value="<?php echo $detail['rank']; ?>" type="number" name="rank" class="form-control" id="rank" required>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="icon">アイコン</label>
            <span class="float-right badge badge-danger">必須</span>
            @include('admin._part.img', ['name' => 'icon', 'value' => isset($detail['icon']) ? $detail['icon'] : '', 'required' => true])
          </div>
        </div>
      </div>
      <!-- /.row -->
    </div>
    <!-- /.card-body -->
  </div>
  <!-- /.card -->

  <footer class="main-footer">
    <div class="row">
      <div class="col-6">
        <a href="/admin/requirement/type/list" id="btn-list-back" class="btn btn-link pl-1"><i class="fa fa-backward"></i><span> 一覧に戻る</span></a>
        <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#del-modal"><i class="fas fa-trash-alt"></i> 削除</button>
      </div>
      <div class="col-6 text-right">
        <button id="btn-save" class="btn btn-primary"><i class="fas fa-save"></i> 保存</button>
      </div>
    </div>
  </footer>

</form>
@endsection