const BASE_URL = "http://127.0.0.1:8000"
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
             user_id: "3"
          },
          success: function(result){
             jQuery('.alert').show();
             jQuery('.alert').html(result.success);
          }});
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
          url: BASE_URL+"/api/timestamp/update/4",
          method: 'post',
          data: {
             user_id: "3"
          },
          success: function(result){
             jQuery('.alert').show();
             jQuery('.alert').html(result.success);
          }});
       });
});