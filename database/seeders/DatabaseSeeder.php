<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Seeder;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
      DB::table('admins')->insert([
        'name' => Str::random(10),
        'email' => Str::random(10) . '@airbridal.co.jp',
        'group' => 100,
        'password' => Hash::make('password'),
      ]);
      DB::table('admins')->insert([
        'name' => Str::random(10),
        'email' => Str::random(10) . '@airbridal.co.jp',
        'group' => 100,
        'password' => Hash::make('11111111'),
      ]);
      DB::table('admins')->insert([
        'name' => Str::random(10),
        'email' => Str::random(10) . '@airbridal.co.jp',
        'group' => 100,
        'password' => Hash::make('22222222'),
      ]);
      DB::table('users')->insert([
          'name' => 'User',
          'email' => 'user@gmail.com',
          'password' => bcrypt('ad
          min123'),
        'prefecture' => 10,
        'address' => Str::random(10),
      ]);
     
    DB::table('users')->insert([
      'name' => 'User',
      'email' => 'a@gmail.com',
      'password' => bcrypt('password'),
    'prefecture' => 10,
    'address' => Str::random(10),
  ]);
    }
  }
  