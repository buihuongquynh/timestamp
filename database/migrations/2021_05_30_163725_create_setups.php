<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSetups extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('setups', function (Blueprint $table) {
            $table->id();
            $table->string('manage_mail', 2048)->comment('管理者メール');
            $table->string('tag_head', 2048)->nullable()->comment('head内タグ');
            $table->string('tag_body_top', 2048)->nullable()->comment('body内上タグ');
            $table->string('tag_body_end', 2048)->nullable()->comment('body最後タグ');
            $table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP'));
            $table->timestamp('updated_at')->default(DB::raw('CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP'));
        });

        DB::table('setups')->insert([
            'manage_mail' => Str::random(10).'@airbridal.co.jp',
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('setups');
    }
}
