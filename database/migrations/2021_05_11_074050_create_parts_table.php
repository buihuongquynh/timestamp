<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePartsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('parts', function (Blueprint $table) {
            $table->id();
            $table->integer('type')->comment('タイプ');
            $table->string('name')->comment('名前');
            $table->string('image1', 64)->nullable()->comment('写真1');
            $table->string('image2', 64)->nullable()->comment('写真2');
            $table->string('image3', 64)->nullable()->comment('写真3');
            $table->string('image4', 64)->nullable()->comment('写真4');
            $table->string('image5', 64)->nullable()->comment('写真5');
            $table->integer('price')->default(0)->comment('基本単価');
            $table->integer('option_price')->default(0)->comment('オプション増加単価');
            $table->integer('option_unit_price')->default(0)->comment('オプション増加人数単価');
            $table->text('heading')->comment('冒頭文');
            $table->text('description1')->nullable()->comment('説明文1');
            $table->text('description2')->nullable()->comment('説明文2');
            $table->text('description3')->nullable()->comment('説明文3');
            $table->text('description4')->nullable()->comment('説明文4');
            $table->text('description5')->nullable()->comment('説明文5');
            $table->integer('admin_id')->comment('企業ID');
            $table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP'));
            $table->timestamp('updated_at')->default(DB::raw('CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP'));
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('parts');
    }
}
