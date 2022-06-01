<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Timestamp extends Model
{
    public $timestamps = false;
    use HasFactory;
    protected $fillable = [
        'checkin',
        'checkout',
        'user_id',
        'checkin_update',
        'checkout_update'
    ];
}
