<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Genero>
 */
class GeneroFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $generosOficiales = [
            'Acción', 
            'Comedia', 
            'Drama', 
            'Terror', 
            'Ciencia Ficción', 
            'Thriller', 
            'Romance', 
            'Aventura',
            'Documental',
            'Animaciçon',
        ];

        // fake()->unique() asegura que no repita un género que ya ha salido en esta ejecución
        $nombre = fake()->unique()->randomElement($generosOficiales);
        
        return [
            'nombre' => $nombre,
            'nom_minus' => \Illuminate\Support\Str::slug($nombre),
        ];
    }
}
