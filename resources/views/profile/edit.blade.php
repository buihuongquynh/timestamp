@extends('template')
@section('content')
<div class="container">
    <edit-profile user_id = "<?php echo $user["id"]; ?>"></edit-profile>
</div>
@endsection