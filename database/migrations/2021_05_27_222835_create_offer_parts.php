<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOfferParts extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('offer_parts', function (Blueprint $table) {
            $table->integer('offer_id')->comment('申込ID');
            $table->integer('part_id')->comment('パーツID');
            $table->string('part_name')->comment('パーツ-名前');
            $table->integer('part_type_id')->comment('パーツ-タイプID');
            $table->string('part_type_name')->comment('パーツ-タイプ名前');
            // 価格計算
            $table->integer('price')->default(0)->comment('基本単価');
            $table->integer('option_price')->default(0)->comment('オプション増加単価');
            $table->integer('option_unit_price')->default(0)->comment('オプション増加人数単価');
            $table->index(['offer_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('offer_parts');
    }
}
