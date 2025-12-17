<?php

namespace App\Http\Controllers;

use App\Models\Pelicula;
use App\Models\Genero;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class PeliculaController extends Controller
{
    public function show($id)
    {
       //hacemos que en $pelicula este tambien las reseñas
        $pelicula = Pelicula::with(['genero', 'resenas.user' => function($query) {
            $query->latest(); // Ordenar reseñas por fecha
        }])->findOrFail($id);

        $esFavorita = false;

        if (Auth::check()) {
            $esFavorita = Auth::user()->favoritas()->where('pelicula_id', $id)->exists();
        }

        //Enviamos los datos a la vista
        return Inertia::render('Domain/Peliculas/detallesPelicula', [
            'pelicula' => $pelicula,
            'esFavorita' => $esFavorita,
        ]);

    }

    public function toggleFavorito($id)
    {
        $pelicula = Pelicula::findOrFail($id);
        $user = Auth::user();

        // Si existe la relación, la quita (detach). Si no existe, la crea (attach).
        $user->favoritas()->toggle($pelicula->id);

        return back();
    }

    public function index(Request $request){

        $query = Pelicula::with('genero'); // Cargamos el género siempre

        // Si hay búsqueda por texto...
        if ($request->search) {
            $query->where('titulo', 'like', '%' . $request->search . '%');
        }

        // Si hay filtro por género...
        if ($request->genero) {
            $query->where('genero_id', $request->genero);
        }

        // Devolvemos la vista con las películas encontradas
        return Inertia::render('Domain/Peliculas/listaPeliculas', [
            'peliculas' => $query->latest()->get(), // Las más nuevas primero
            'filters' => $request->only(['search', 'genero']), // Para recordar qué buscaste
        ]);
    }

    public function indexPorGenero(Request $request, $slug)
    {
        // 1. Buscamos el género por su slug. Si no existe, da error 404.
        $genero = Genero::where('nom_minus', $slug)->firstOrFail();

        // 2. Iniciamos la query filtrando ya por ese género
        $query = Pelicula::where('genero_id', $genero->id)->with('genero');

        // 3. (Opcional) Mantenemos la funcionalidad de búsqueda por texto DENTRO de ese género
        if ($request->search) {
            $query->where('titulo', 'like', '%' . $request->search . '%');
        }

        // 4. Retornamos la MISMA vista que usa el index normal
        return Inertia::render('Domain/Peliculas/listaPeliculas', [
            'peliculas' => $query->latest()->get(),
            'filters' => [
                'search' => $request->search,
                'genero' => $genero->nombre // Pasamos el nombre para mostrarlo en el título
            ],
            'generoActual' => $genero
        ]);
    }
}
