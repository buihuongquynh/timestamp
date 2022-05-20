<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTimestampsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('timestamps', function (Blueprint $table) {
            $table->id();
            $table->dateTime('checkin')->default(DB::raw('CURRENT_TIMESTAMP'));
            $table->dateTime('checkout')->nullable()->default(null);
            $table->unsignedInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->dateTime('checkin_update')->nullable()->default(null);
            $table->dateTime('checkout_update')->nullable()->default(null);
        });
    }
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('timestamps');
    }
}
