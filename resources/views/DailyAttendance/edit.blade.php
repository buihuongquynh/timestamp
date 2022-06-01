@extends('template')
@section('content')
<div>
<edit-timestamp user_id = "<?php echo $user["id"]; ?>"></edit-timestamp>
</div>
@endsection