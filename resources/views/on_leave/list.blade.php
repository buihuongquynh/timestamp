@extends('template')
@section('content')
<div class="">
<list-slow user_id = "<?php echo $user["id"]; ?>"></list-slow>
</div>
@endsection