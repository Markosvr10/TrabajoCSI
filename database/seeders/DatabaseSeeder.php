<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Pelicula;
use App\Models\Genero;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        $admin = User::firstOrCreate(
            ['email' => 'marcos.vicenrios@alum.uca.es'],
            [
                'name' => 'Marcos',
                'password' => bcrypt('marcos.vicenrios'),
            ]
        );

        Genero::factory()->count(10)->create();

        $peliculas = Pelicula::factory(50)->create();

        $admin->favoritas()->attach(
            $peliculas->random(6)->pluck('id')->toArray()
        );
        
        $this->command->info('¡Datos sembrados! Usuario: admin@markifilms.com / password');
    }
}
