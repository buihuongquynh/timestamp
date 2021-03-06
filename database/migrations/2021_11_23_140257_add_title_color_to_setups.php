<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTitleColorToSetups extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('setups', function (Blueprint $table) {
            $table->string('title_color', 2048)->nullable()->comment('タイトルカラー')->after('slider_title');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('setups', function (Blueprint $table) {
            $table->dropColumn('title_color');
        });
    }
}
