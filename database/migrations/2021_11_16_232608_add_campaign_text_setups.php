<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCampaignTextSetups extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::table('setups', function (Blueprint $table) {
      $table->text('campaign_text')->after('tag_body_end')->comment('キャンペーンテキスト')->nullable();
      $table->string('campaign_img')->after('campaign_text')->comment('キャンペーンイメージ')->nullable();
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
      $table->dropColumn('campaign_text');
      $table->dropColumn('campaign_img');
    });
  }
}
