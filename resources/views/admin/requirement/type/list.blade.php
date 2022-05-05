@extends('admin.template')
@section('content')
<div class="row">
  <div class="col-12">

    <div class="card">
      <div class="card-body">
        <table id="list-table" class="table table-bordered table-striped">
          <thead>
            <tr>
              <th>大項目</th>
              <th>更新日</th>
              <th>登録日</th>
            </tr>
          </thead>
        </table>
      </div>
      <!-- /.card-body -->
    </div>
    <!-- /.card -->
  </div>
  <!-- /.col -->
</div>

<footer class="main-footer">
  <div class="row">
    <div class="col-6"></div>
    <div class="col-6 text-right">
      <a id="btn-new" href="/admin/requirement/type/new" class="btn btn-primary float-right"><i class="fas fa-plus-circle"></i> 新規登録</a>
    </div>
  </div>
</footer>

<script>
  var tableConfig = {
    'buttons': [],
    'paging': false,
    'info': false,
    'stateSave': false,
    'columns': [{
        data: 'name',
        render: function(data, type, row, meta) {
          return '<a href="/admin/requirement/type/detail/' + row['id'] + '">' + data + '</a>';
        }
      },
      {
        data: 'updated_at'
      },
      {
        data: 'created_at'
      }
    ]
  };
</script>
@endsection