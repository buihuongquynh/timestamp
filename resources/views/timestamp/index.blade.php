@extends('template')
@section('content')
<div class="card text-center">
  <div class="card-header">
    Timestamp
  </div>
  <div class="center">


  <div class="card-body contents">
    <h5 class="card-title">Huong Quynh</h5>
    <h1 class="card-text">

    <div id="MyClockDisplay" class="clock" onload="showTime()"></div>
    </h1>
    <button type="button" class="btn btn-success">check in</button>
    <button type="button" class="btn btn-warning">checkout</button>

  </div>
  </div>
 
</div>
@endsection