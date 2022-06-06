@extends('template')
@section('content')
<div class="container mt-3">
<list-slow user_id = "<?php echo $user["id"]; ?>"></list-slow>
</div>
@endsection