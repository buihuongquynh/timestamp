@extends('admin.template')
@section('content')
<form id="detail-form">


  <div class="card card-default">
    <div class="card-header">
      <h3 class="card-title">タグ</h3>

      <div class="card-tools">
        <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i></button>
      </div>
    </div>
    <!-- /.card-header -->
    <div class="card-body">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="tag_head">（全ページ）head内</label>
            <textarea name="tag_head" class="form-control" id="tag-head" rows="5" maxlength="2000"><?php echo $detail['tag_head']; ?></textarea>
          </div>
          <div class="form-group">
            <label for="tag_body_top">（全ページ）body内の上</label>
            <textarea name="tag_body_top" class="form-control" id="tag-body-top" rows="5" maxlength="2000"><?php echo $detail['tag_body_top']; ?></textarea>
          </div>
        </div>
        <!-- /.col -->
        <div class="col-md-6">
          <div class="form-group">
            <label for="tag_body_end">（全ページ）body内の最後</label>
            <textarea name="tag_body_end" class="form-control" id="tag-body-end" rows="5" maxlength="2000"><?php echo $detail['tag_body_end']; ?></textarea>
          </div>
        </div>
      </div>
      <!-- /.row -->
    </div>
    <!-- /.card-body -->
  </div>

  <div class="card card-default">
    <div class="card-header">
      <h3 class="card-title">（ホームページ）キービジュアルのテキスト</h3>

      <div class="card-tools">
        <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i></button>
      </div>
    </div>
    <!-- /.card-header -->
    <div class="card-body">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="slider-title">内容</label>
            <textarea name="slider_title" class="form-control" id="slider-title" rows="5" maxlength="200"><?php echo $detail['slider_title']; ?></textarea>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="title-color">カラー</label>
            <div class="input-group">
              <input type="text" value="<?php echo $detail['title_color']; ?>" name="title_color" id="title-color" class="form-control w-75">
              <span class="input-group-btn" style="width:0px;"></span>
              <input type="color" id="color" value="<?php echo $detail['title_color']; ?>" class="form-control " style="margin-left:-1px">
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /.card-body -->
  </div>

  <div class="card card-default">
    <div class="card-header">
      <h3 class="card-title">キャンペーン</h3>

      <div class="card-tools">
        <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i></button>
      </div>
    </div>
    <!-- /.card-header -->
    <div class="card-body">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="heading">イメージ</label>
            @include('admin._part.img', ['name' => 'campaign_img', 'value' => $detail['campaign_img']])
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="heading">テキスト</label>
            <textarea name="campaign_text" class="form-control mysummernote" id="campaign-text" rows="5" maxlength="2000"><?php echo $detail['campaign_text']; ?></textarea>
          </div>
        </div>
      </div>
    </div>
    <!-- /.card-body -->
  </div>

  <footer class="main-footer">
    <div class="row">
      <div class="col-6">
        <a href="/admin/requirement/setups/detail" id="btn-list-back" class="btn btn-link pl-1" hidden></a>
      </div>
      <div class="col-6 text-right">
        <button id="btn-save" class="btn btn-primary"><i class="fas fa-save"></i> 保存</button>
      </div>
    </div>
  </footer>

</form>
<script>
  document.addEventListener('DOMContentLoaded', function() {
    $('#color').on('input', function() {
      var val = $(this).val();
      $('#title-color').attr('value', val);
    });
  });
</script>
@endsection