@extends('template')
@section('content')
<div class="container">
    <profile user_id = "<?php echo $user["id"]; ?>"></profile>
</div>
@endsection