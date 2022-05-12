@extends('template')
@section('content')
<div>
<daily-attendance user_id = "<?php echo $user["id"]; ?>"></daily-attendance>
</div>
@endsection