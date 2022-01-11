<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
}


// rolling back migration
// to roll back last "batch" of migrations, which may
// include multiple migration files
// php artisan migrate:rollback

// you may roll back a limited number of migrations by providing
// the step option to the rollback command.
// the following command will rollback the last five migrations

// php artisan migrate:rollback --step=5

// migrate:reset will roll back all of your applications migrations

// php artisan migrate:reset

// migrate:referesh will rollback all of your migrations and then
// execute the migrate command.

// the following command will roll back and re-migrate the last five
// migrations

// php artisan migrate:refresh --step=5

// ********************drop all tables and migrate ======================
// the migrate:fresh command will drop all tables from the database 
// then execute the migrate command