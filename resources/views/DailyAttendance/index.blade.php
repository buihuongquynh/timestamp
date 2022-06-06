@extends('template')
@section('content')
<div class="container mt-3">
<daily-attendance user_id = "<?php echo $user["id"]; ?>"></daily-attendance>
</div>
@endsection