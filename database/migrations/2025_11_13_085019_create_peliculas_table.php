<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::create('peliculas', function (Blueprint $table) {
            $table->id();
            $table->string('titulo');
            $table->text('descripcion');
            $table->string('director')->nullable();
            $table->integer('ano_lanzamiento');
            $table->string('genero_id');
            $table->decimal('valoracion', 3, 1)->default(0);
            $table->string('imagen_url')->nullable();
            $table->string('trailer_url')->nullable();
            
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('peliculas');
    }
};
