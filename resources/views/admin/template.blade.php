<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <link rel="icon" type="image/png" href="/assets/dist/admin/img/favicon-16x16.png">

  <title><?php echo $title; ?></title>

  <!-- Font Awesome Icons -->
  <link rel="stylesheet" href="/assets/plugins/fontawesome-free/css/all.min.css">
  <!-- overlayScrollbars -->
  <link rel="stylesheet" href="/assets/plugins/overlayScrollbars/css/OverlayScrollbars.min.css">
  <!-- Datetimepicker -->
  <link rel="stylesheet" href="/assets/plugins/bootstrap4-datetimepicker/css/bootstrap-datetimepicker.min.css">
  <!-- Select2 -->
  <link rel="stylesheet" href="/assets/plugins/select2/css/select2.min.css">
  <link rel="stylesheet" href="/assets/plugins/select2-bootstrap4-theme/select2-bootstrap4.min.css">
  <?php
  $segments = Request::segments();
  !isset($segments[3]) and $segments[3] = 'index';
  ?>
  <?php $is_list = $segments[3] == 'list' || !empty($list); ?>
  <?php if ($is_list) : ?>
  <!-- DataTables -->
  <link rel="stylesheet" href="/assets/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css">
  <link rel="stylesheet" href="/assets/plugins/datatables-responsive/css/responsive.bootstrap4.min.css">
  <link rel="stylesheet" href="/assets/plugins/datatables-buttons/css/buttons.bootstrap4.min.css">
  <?php endif; ?>
  <!-- Theme style -->
  <link rel="stylesheet" href="/assets/dist/admin/css/adminlte.min.css">
  <!-- summernote -->
  <link rel="stylesheet" href="/assets/plugins/summernote/summernote-bs4.css">
  <!-- Google Font: Source Sans Pro -->
  <link href="https://fonts.googleapis.com/earlyaccess/mplus1p.css" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/earlyaccess/roundedmplus1c.css" rel="stylesheet" />
  <link rel="stylesheet" href="/assets/dist/admin/css/main.css">

  <!-- REQUIRED SCRIPTS -->
  <!-- jQuery -->
  <script defer src="/assets/plugins/jquery/jquery.min.js"></script>
  <!-- Bootstrap -->
  <script defer src="/assets/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
  <!-- overlayScrollbars -->
  <script defer src="/assets/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js"></script>
  <!-- datetime-picker -->
  <script defer src="/assets/plugins/moment/moment.min.js"></script>
  <script defer src="/assets/plugins/moment/locale/ja.js"></script>
  <!-- Datetimepicker -->
  <script defer src="/assets/plugins/bootstrap4-datetimepicker/js/bootstrap-datetimepicker.min.js"></script>
  <!-- Select2 -->
  <script defer src="/assets/plugins/select2/js/select2.full.min.js"></script>

  <?php if ($is_list) : ?>
  <!-- DataTables -->
  <script defer src="/assets/plugins/datatables/jquery.dataTables.min.js"></script>
  <script defer src="/assets/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"></script>
  <script defer src="/assets/plugins/datatables-responsive/js/dataTables.responsive.min.js"></script>
  <script defer src="/assets/plugins/datatables-responsive/js/responsive.bootstrap4.min.js"></script>
  <script defer src="/assets/plugins/datatables-buttons/js/dataTables.buttons.js"></script>
  <script defer src="/assets/plugins/datatables-buttons/js/buttons.bootstrap4.min.js"></script>
  <script defer src="/assets/plugins/datatables-buttons/js/buttons.html5.js"></script>
  <?php endif; ?>
  <!-- jquery-validation -->
  <script defer src="/assets/plugins/jquery-validation/jquery.validate.min.js"></script>
  <script defer src="/assets/plugins/jquery-validation/localization/messages_ja.min.js"></script>
  <script defer src="/assets/plugins/jquery-validation/additional-methods.min.js"></script>

  <!-- Summernote -->
  <script defer src="/assets/plugins/summernote/summernote-bs4.min.js"></script>
  <script defer src="/assets/plugins/summernote/lang/summernote-ja-JP.min.js"></script>

  <!-- AdminLTE App -->
  <script defer src="/assets/dist/admin/js/adminlte.min.js"></script>

  <!-- OPTIONAL SCRIPTS -->
  <script defer src="/assets/dist/admin/js/base.js"></script>
</head>

<body id="<?php echo $segments[1]; ?>-<?php echo $segments[2]; ?>" class="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed text-sm <?php echo $segments[3]; ?>">
  <script>
    if (localStorage.getItem('remember.lte.pushmenu') == 'sidebar-collapse') document.body.classList.add('sidebar-collapse');
    const storageUrl = '<?php echo trim(Storage::url('.'), '.'); ?>';
  </script>
  <div id="adminApp" class="wrapper r-<?php // echo implode(' r-', Auth::group('Simplegroup')->get_roles());
                        ?>">
    <!-- Navbar -->
    <nav class="main-header navbar navbar-expand navbar-white navbar-light">
      <!-- Left navbar links -->
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" data-widget="pushmenu" data-enable-remember="true" href="#" role="button"><i class="fas fa-bars"></i></a>
        </li>
        <!-- <li class="nav-item">
          <a href="/admin/standard/home" class="nav-link">?????????</a>
        </li> -->
        <li class="nav-item">
          <a href="/" class="nav-link" target="_blank">??????????????????</a>
        </li>
      </ul>
    </nav>
    <!-- /.navbar -->

    <!-- Main Sidebar Container -->
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <!-- Brand Logo -->
      <a href="/admin/standard/home" class="brand-link">
        <img src="/assets/dist/admin/img/logo.png" class="brand-image img-circle elevation-3" style="opacity: .8">
        <span class="brand-text font-weight-light">??????????????????</span>
      </a>

      <!-- Sidebar -->
      <div class="sidebar">
        <!-- Sidebar user panel (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex" style="overflow: unset;">
          <div class="image">
            <img src="/assets/dist/admin/img/avatar5.png" class="img-circle elevation-2" alt="User Image">
          </div>
          <div class="info">
            <a href="#" class="d-block dropdown-toggle dropdown-icon" data-toggle="dropdown"><span class="mr-2"><?php echo $admin['name'] ?></span></a>
            <div class="dropdown-menu">
              <a class="dropdown-item text-primary" href="/admin/guard/logout">???????????????</a>
            </div>
          </div>
        </div>

        <!-- Sidebar Menu -->
        <nav class="mt-2">
          <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false" id="nav">
            <!-- <li class="nav-item">
              <a href="/admin/enterprise/offer/list" class="nav-link">
                <i class="nav-icon fas fa-calendar-check"></i>
                <p>
                  ????????????
                </p>
              </a>
            </li>
            <li class="nav-item">
              <a href="/admin/enterprise/place/list" class="nav-link">
                <i class="nav-icon fas fa-place-of-worship"></i>
                <p>
                  ????????????
                </p>
              </a>
            </li>
            <li class="nav-item">
              <a href="/admin/enterprise/cuisine/list" class="nav-link">
                <i class="nav-icon fas fa-stroopwafel"></i>
                <p>
                  ????????????
                </p>
              </a>
            </li>
            <li class="nav-item">
              <a href="/admin/enterprise/costume/list" class="nav-link">
                <i class="nav-icon fas fa-tshirt"></i>
                <p>
                  ????????????
                </p>
              </a>
            </li> -->
            <!-- <li class="nav-item">
              <a href="/admin/enterprise/part/list" class="nav-link">
                <i class="nav-icon fab fa-buromobelexperte"></i>
                <p>
                  ???????????????
                </p>
              </a>
            </li>
            <li class="nav-item">
              <a href="/admin/enterprise/package/list" class="nav-link">
                <i class="nav-icon fas fa-cube"></i>
                <p>
                  ?????????????????????
                </p>
              </a>
            </li>-->
            <li class="nav-item">
              <a href="/admin/requirement/type/list" class="nav-link">
                <i class="nav-icon fas fa-clipboard-list"></i>
                <p>
                  ???????????????
                </p>
              </a>
            </li> 
            <li class="nav-item">
              <a href="/admin/standard/user/list" class="nav-link">
                <i class="nav-icon fas fa-users"></i>
                <p>
                  ????????????
                </p>
              </a>
            </li>
            <li class="nav-item">
              <a href="/admin/requirement/review/list" class="nav-link">
                <i class="nav-icon fas fa-headset"></i>
                <p>
                  ??????????????????
                </p>
              </a>
            </li>
            <li class="nav-item">
              <a href="/admin/leave/list" class="nav-link">
                <i class="nav-icon fas fa-headset"></i>
                <p>
                Leave
                </p>
              </a>
            </li>
            <li class="nav-item">
              <a href="/admin/standard/moderator/list" class="nav-link">
                <i class="nav-icon fas fa-users-cog"></i>
                <p>
                  ??????????????????
                </p>
              </a>
            </li>
            <!-- <li class="nav-item">
              <a href="/admin/news/type/list" class="nav-link">
                <i class="nav-icon fas  fa-newspaper"></i>
                <p>
                  ??????????????????
                </p>
              </a>
            </li>
            -->
            <li class="nav-item">
              <a href="/admin/requirement/setups/detail" class="nav-link">
                <i class="nav-icon fas  fa-cogs"></i>
                <p>
                  ????????????
                </p>
              </a>
            </li> 
          </ul>
        </nav>
        <!-- /.sidebar-menu -->
      </div>
      <!-- /.sidebar -->
    </aside>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <div class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1 class="m-0 text-dark"><?php echo $title; ?></h1>
            </div><!-- /.col -->
          </div><!-- /.row -->
        </div><!-- /.container-fluid -->
      </div>
      <!-- /.content-header -->

      <!-- Main content -->
      <section class="content">
        <div class="container-fluid">
          @yield('content')
        </div>
      </section>
      <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->

    <!-- Control Sidebar -->
    <aside class="control-sidebar control-sidebar-dark">
      <!-- Control sidebar content goes here -->
    </aside>
    <!-- /.control-sidebar -->
  </div>
  <!-- ./wrapper -->

  <?php if ($is_list) : ?>
  <div class="modal fade" id="setting-modal" tabindex="-1" role="dialog" aria-labelledby="setting-modal-label" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header bg-primary">
          <h5 class="modal-title" id="setting-modal-label">???????????????????????????</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="form-group" id="setting-length">
            <label>????????????</label>
            <div>
              <div class="custom-control custom-radio custom-control-inline">
                <input value="10" class="custom-control-input" type="radio" id="length10" name="length">
                <label for="length10" class="custom-control-label">10</label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input value="25" class="custom-control-input" type="radio" id="length25" name="length">
                <label for="length25" class="custom-control-label">25</label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input value="50" class="custom-control-input" type="radio" id="length50" name="length">
                <label for="length50" class="custom-control-label">50</label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input value="100" class="custom-control-input" type="radio" id="length100" name="length">
                <label for="length100" class="custom-control-label">100</label>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label>????????????</label>
            <ul class="row p-0" id="setting-item" style="list-style-type: none;"></ul>
          </div>
        </div>
        <div class="modal-footer justify-content-start">
          ???????????????????????????????????????????????????????????????????????????????????????????????????
        </div>
      </div>
    </div>
  </div>
  <?php else : ?>
  <!-- Modal -->
  <div class="modal fade" id="del-modal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">??????</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          ??????????????????????????????????????????????????????????????? ?
        </div>
        <div class="modal-footer">
          <button type="button" id="btn-del" class="btn btn-danger"><i class="fas fa-trash-alt"></i> ???????????????</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal"><i class="fas fa-times"></i> ???????????????</button>
        </div>
      </div>
    </div>
  </div>
  <?php endif; ?>
  <script src="{{ asset('assets/dist/js/app.js') }}"></script>
</body>

</html>