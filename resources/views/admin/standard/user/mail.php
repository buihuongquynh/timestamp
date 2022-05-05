<form id="detail-form">
  <div class="card card-default">
    <div class="card-header">
      <h3 class="card-title">メール送信</h3>

      <div class="card-tools">
        <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i></button>
      </div>
    </div>
    <!-- /.card-header -->
    <div class="card-body">

      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>氏名</label>
            <input type="text" class="form-control" disabled value="<?php echo $detail['name1'] . ' ' . $detail['name2']; ?>">
          </div>
          <div class="form-group">
            <label>住所</label>
            <input type="text" class="form-control" disabled value="<?php echo $detail['address']; ?>">
          </div>
          <div class="form-group">
            <label>電話番号</label>
            <input type="text" class="form-control" disabled value="<?php echo $detail['tel']; ?>">
          </div>
          <div class="form-group">
            <label>FBA納品代行依頼の予定件数</label>
            <input type="text" class="form-control" disabled value="<?php echo $detail['fba']; ?>">
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="template">メールテンプレート</label>
            <select class="form-control" id="template">
              <option>選択してください</option>
              <?php foreach ($templates as $template) : ?>
              <option value="<?php echo $template['id']; ?>"><?php echo $template['subject']; ?></option>
              <?php endforeach; ?>
            </select>
          </div>
          <div class="form-group">
            <label for="subject">件名</label>
            <span class="float-right badge badge-danger">必須</span>
            <input type="text" name="subject" class="form-control" id="subject" required>
          </div>
          <div class="form-group">
            <label for="body">本文</label>
            <span class="float-right badge badge-danger">必須</span>
            <textarea name="body" class="form-control" id="body" required rows="10"></textarea>
          </div>
          <div class="form-group">
            <div class="custom-control custom-checkbox">
              <input class="custom-control-input" type="checkbox" id="admin" name="admin" value="1">
              <label for="admin" class="custom-control-label">管理者宛に同じな内容を送信する</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /.card-body -->
  </div>
  <!-- /.card -->

  <footer class="main-footer">
    <div class="row">
      <div class="col-6">
        <a href="/admin/standards/users/detail/<?php echo $detail['id']; ?>" id="btn-list-back" class="btn btn-link pl-1"><i class="fa fa-backward"></i> 会員管理に戻る</a>
      </div>
      <div class="col-6 text-right">
        <button id="btn-save" class="btn btn-primary" data-notice="1"><i class="fas fa-paper-plane"></i> 送信</button>
      </div>
    </div>
  </footer>

</form>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    $('#template').change(function() {
      if ($(this).val()) {
        $.ajax({
          url: '/admin/emails/inquiries/mail_template/' + $(this).val(),
          method: 'GET',
          dataType: 'json'
        }).done(function(data) {
          // If successful
          if (data) {
            $('#subject').val(data['subject']);
            $('#body').val(data['body']);
          }
        });
      }
    });
  });
</script>