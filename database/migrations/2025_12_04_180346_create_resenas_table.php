<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('resenas', function (Blueprint $table) {
            $table->id();
        
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('pelicula_id')->constrained()->onDelete('cascade');
                
            $table->string('titulo')->nullable();
            $table->text('contenido');            
            $table->unsignedTinyInteger('puntuacion'); 
            
            $table->timestamps();
            $table->unique(['user_id', 'pelicula_id']);

        });
    }

    public function down(): void
    {
        Schema::dropIfExists('resenas');
    }
};
