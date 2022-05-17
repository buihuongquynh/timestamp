<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Editing_time extends Model
{
    public $editing_times = false;
    use HasFactory;
    protected $fillable = [
        'checkin',
        'checkout',
        'timestamp_id',
    ];
}
