@extends('template')
@section('content')
<div class="container">
<edit-slow user_id = "<?php echo $user["id"]; ?>"></edit-slow>
</div>
@endsection