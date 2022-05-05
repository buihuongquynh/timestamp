<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddSliderTitlteToSetups extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('setups', function (Blueprint $table) {
            $table->string('slider_title', 2048)->nullable()->comment('スライダーのタイトル')->after('tag_body_end');
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
            $table->dropColumn('slider_title');
        });
    }
}
