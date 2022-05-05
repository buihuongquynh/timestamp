@extends('admin.template')
@section('content')
<form id="detail-form">
  <div class="row">
    <div class="col-md-6">
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
            <div class="form-group col-md-6">
              <label for="user_name">会員名</label>
              <span class="float-right badge badge-danger">必須</span>
              <input value="<?php echo isset($detail['user_name']) ? $detail['user_name'] : '' ?>" type="text" name="user_name"
                class="form-control" id="user_name" required>
            </div>
            <div class="form-group col-md-6">
              <label for="type">パッケージ</label>
              <?php $_v = isset($detail['package_id']) ? $detail['package_id'] : ''; ?>
              <span class="float-right badge badge-danger">必須</span>
              <select class="form-control" name="package_id" id="package_id" required>
                <option value="">選択してください</option>
                <?php foreach ($packages as $v) : ?>
                <option value=<?php echo $v['id']; ?>" <?php echo $v['id'] == $_v ? ' selected' : ''; ?>><?php echo $v['name']; ?></option>
                <?php endforeach; ?>
              </select>
            </div>
            <div class="form-group col-md-12">
              <label for="name">タイトル</label>
              <span class="float-right badge badge-danger">必須</span>
              <input value="<?php echo isset($detail['title']) ? $detail['title'] : '' ?>" type="text"
                name="title" class="form-control" id="title" required>
            </div>
          </div>
          <!-- /.row -->
        </div>
        <!-- /.card-body -->
      </div>
    </div>
    <div class="col-md-6">
      <div class="card card-default">
        <div class="card-header">
          <h3 class="card-title">レビュー評価</h3>

          <div class="card-tools">
            <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i></button>
          </div>
        </div>
        <!-- /.card-header -->
        <div class="card-body">
          <div class="row">
            <div class="form-group col-md-6">
              <label for="price">レビュー評価</label>
              <span class="float-right badge badge-danger">必須</span>
              <input value="<?php echo isset($detail['review_score']) ? $detail['review_score'] : 0 ?>" type="number" name="review_score"
                class="form-control" id="review_score" required>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="card card-default">
    <div class="card-header">
      <h3 class="card-title">表示設定</h3>

      <div class="card-tools">
        <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i></button>
      </div>
    </div>
    <!-- /.card-header -->
    <div class="card-body">
      <div class="row">
        <div class="col-md-4">
          <div class="form-group">
            <label for="heading">写真</label>
            @include('admin._part.img', ['name' => 'img1', 'value' => isset($detail['img'][0]) ?
            $detail['img'][0]['name'] : ''])
            <input value="<?php echo isset($detail['img'][0]) ? $detail['img'][0]['alt'] : '' ?>" type="hidden"
              name="img1_alt" class="form-control form-control-sm mt-2">
          </div>
        </div>
        <?php for ($i = 2; $i < 6; $i++) : ?>
        <?php $name = 'img' . $i; ?>
        <?php $_v = isset($detail['img'][$i - 1]) ? $detail['img'][$i - 1]['name'] : ''; ?>
        <div class="col-md-4 <?php echo $_v ? '' : 'd-none'; ?>">
          <div class="form-group">
            <label for="heading">　</label>
            @include('admin._part.img', ['name' => $name, 'value' => $_v])
            <input value="<?php echo isset($detail['img'][$i - 1]) ? $detail['img'][$i - 1]['alt'] : '' ?>" type="hidden"
              name="<?php echo $name; ?>_alt" class="form-control form-control-sm mt-2">
          </div>
        </div>
        <?php endfor; ?>
        <div class="col-md-4">
          <div class="form-group">
            <label for="heading">　</label>
            <button type="button" class="btn btn-outline-primary btn-lg btn-block" id="add-image"><i
                class="fas fa-plus-circle fa-3x"></i></button>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <label for="heading">コンテンツ</label>
            <span class="float-right badge badge-danger">必須</span>
            <textarea class="mysummernote" name="content"
              required><?php echo isset($detail['content']) ? $detail['content'] : '' ?></textarea>
          </div>
        </div>
      </div>
      <!-- /.row -->
    </div>
    <!-- /.card-body -->
  </div>

  <footer class="main-footer">
    <div class="row">
      <div class="col-6">
        <a href="/admin/requirement/review/list" id="btn-list-back" class="btn btn-link pl-1"><i
            class="fa fa-backward"></i><span> 一覧に戻る</span></a>
        <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#del-modal"><i
            class="fas fa-trash-alt"></i> 削除</button>
        <button type="button" id="btn-copy" class="btn btn-default"><i class="fas fa-copy"></i><span> 複製</span></button>
      </div>
      <div class="col-6 text-right">
        <button id="btn-save" class="btn btn-primary"><i class="fas fa-save"></i> 保存</button>
      </div>
    </div>
  </footer>

</form>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    $('#add-image').click(function () {
      $('.d-none').eq(0).removeClass('d-none');
      if ($('.d-none').length == 0) {
        $(this).parent().remove();
      }
    });

    // if (window.action == 'detail') {
    //   var changePrice = false;
    //   $('#price, #option-price, #option-unit-price').change(function () {
    //     changePrice = true;
    //   });

    //   $('#btn-save').click(function (e) {
    //     if (changePrice && window.action == 'detail') {
    //       e.preventDefault();
    //       $('#package-update-modal').modal('show');
    //     }
    //   });

    //   $('#package-update-modal').find('.btn').click(function () {
    //     $('#detail-form').append('<input value="' + ($(this).hasClass('btn-danger') ? 1 : 0) + '" type="hidden" name="package_update">').submit();
    //   });
    // }
  });
</script>
@endsection