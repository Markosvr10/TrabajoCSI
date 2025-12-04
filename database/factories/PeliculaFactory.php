<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Genero;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Pelicula>
 */
class PeliculaFactory extends Factory
{

    public function definition(): array
    {

        $imagenes = [
            'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=400&q=80',
            'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=400&q=80',
            'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=400&q=80',
            'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=400&q=80',
            'https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?auto=format&fit=crop&w=400&q=80',
            'https://images.unsplash.com/photo-1478720568477-152d9b164e63?auto=format&fit=crop&w=400&q=80', 
        ];

        $genero = Genero::inRandomOrder()->first();

        return [
            'titulo' => fake()->sentence(3),
            'descripcion' => fake()->paragraph(),
            'director' => fake()->name(),
            'ano_lanzamiento' => fake()->numberBetween(1990, 2024),           
            'genero_id' => $genero ? $genero->id : Genero::factory(),            
            'imagen_url' => fake()->randomElement($imagenes),
            'valoracion' => fake()->randomFloat(1, 1, 5), 
        ];
    }
}
