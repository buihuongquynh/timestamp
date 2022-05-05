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
          <div class="row">
            <div class="form-group col-md-6">
              <label for="name">氏名</label>
              <span class="float-right badge badge-danger">必須</span>
              <input value="<?php echo $detail['name']; ?>" type="text" name="name" class="form-control" id="name" placeholder="例：山田太郎" required>
            </div>
            
          </div>
          <div class="row">
           
            <div class="form-group col-md-6">
            <label for="email">メール</label>
              <span class="float-right badge badge-danger">必須</span>
              <input value="<?php echo $detail['email']; ?>" type="text" name="email" class="form-control" id="email" placeholder="例：山田太郎" required>
            </div>
          </div>
         
         
        
            </div>
          </div>
        </div>
       
    </div>
  </div>

  <footer class="main-footer">
    <div class="row">
      <div class="col-6">
        <a href="/admin/standard/user/list" id="btn-list-back" class="btn btn-link pl-1"><i class="fa fa-backward"></i><span> 一覧に戻る</span></a>
        <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#del-modal"><i class="fas fa-trash-alt"></i> 削除</button>
        <button type="button" id="btn-copy" class="btn btn-default"><i class="fas fa-copy"></i><span> 複製</span></button>
      </div>
      <div class="col-6 text-right">
        <button id="btn-save" class="btn btn-primary"><i class="fas fa-save"></i> 保存</button>
      </div>
    </div>
  </footer>

</form>
@endsection