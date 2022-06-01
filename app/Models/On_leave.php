<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class On_leave extends Model
{
    protected $table = 'on_leave';
    use HasFactory;
    protected $fillable = [
        'start_day_off',
        'end_day_off',
        'user_id',
        'reason',
        'day_slow',
        'slow_time_start',
        'slow_time_end',
        'is_slow'
    ];
}
