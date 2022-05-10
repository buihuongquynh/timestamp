@extends('template')
@section('content')

<div class="card text-center">
  <div class="card-header">
  <?php echo $setup['tag_head'] ?: '-'; ?>
  </div>
  <div class="center">

  
  <div class="card-body contents">
    <h5 class="card-title"><?php echo $user['name'] ?: '-'; ?></h5>
    <h1 class="card-text">

    <div id="MyClockDisplay" style="color: {{$setup['title_color']}} " class="clock" onload="showTime()"></div>
    </h1>
    <button type="button" id="checkin" class="btn btn-success">check in</button>
    <button type="button" id="checkout" class="btn btn-warning">checkout</button>
  </div>
  </div>

</div>
<div class="toast-container position-fixed top-0 end-0 p-3">
  <div id="basicToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header bg-success text-light">
      <h5 class="my-0">Success!</h5>
    </div>
  </div>  
  <div id="error" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header bg-danger text-light">
      <h5 class="my-0">Error!</h5>
    </div>
  </div>  
</div>
<script>
 

  const BASE_URL = "http://l.timestamp"
function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    if(h == 0){
        h = 12;
    }
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    setTimeout(showTime, 1000);
}
showTime();
//call api
jQuery(document).ready(function(){
    jQuery('#checkin').click(function(e){
       e.preventDefault();
       $.ajaxSetup({
          headers: {
              'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
          }
      });
       jQuery.ajax({
          url: BASE_URL+"/api/timestamp",
          method: 'post',
          data: {
             user_id: "<?php echo $user["id"]; ?>"
          },
          success: function(result){
             new bootstrap.Toast(document.querySelector('#basicToast')).show();
          },
          error: function (xhr, ajaxOptions, thrownError) {
            new bootstrap.Toast(document.querySelector('#error')).show();
      }
        });
       });
});

jQuery(document).ready(function(){
    jQuery('#checkout').click(function(e){
       e.preventDefault();
       $.ajaxSetup({
          headers: {
              'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
          }
      });
       jQuery.ajax({
          url: BASE_URL+"/api/timestamp/update/" +  "<?php echo $user["id"]; ?>",
          method: 'post',
          success: function(result){
             new bootstrap.Toast(document.querySelector('#basicToast')).show();
          },
          error: function (xhr, ajaxOptions, thrownError) {
            new bootstrap.Toast(document.querySelector('#error')).show();
      }
        
        });
       });
});
</script>
@endsection