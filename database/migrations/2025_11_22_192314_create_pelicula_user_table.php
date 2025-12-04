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
        Schema::create('pelicula_user', function (Blueprint $table) {
            $table->id();
            
            // Relación con el Usuario
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            
            // Relación con la Película
            $table->foreignId('pelicula_id')->constrained()->onDelete('cascade');
            
            // Opcional: Fecha en que se añadió a favoritos
            $table->timestamps(); 
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pelicula_user');
    }

    
};

