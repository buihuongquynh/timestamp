<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEditingTimesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('editing_times', function (Blueprint $table) {
            $table->id();
            $table->dateTime('checkin')->nullable()->default(null);
            $table->dateTime('checkout')->nullable()->default(null);
            $table->unsignedInteger('timestamp_id');
            $table->foreign('timestamp_id')->references('id')->on('timestamps')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('editing_times');
    }
}
