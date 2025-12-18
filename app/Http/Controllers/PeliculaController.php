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
        $pelicula = Pelicula::with(['genero', 'resenas.user' => function($query) {
            $query->latest();
        }])->findOrFail($id);

        $esFavorita = false;

        if (Auth::check()) {
            $esFavorita = Auth::user()->favoritas()->where('pelicula_id', $id)->exists();
        }

        return Inertia::render('Domain/Peliculas/detallesPelicula', [
            'pelicula' => $pelicula,
            'esFavorita' => $esFavorita,
        ]);

    }

    public function toggleFavorito($id)
    {
        $pelicula = Pelicula::findOrFail($id);
        $user = Auth::user();

        $user->favoritas()->toggle($pelicula->id);

        return back();
    }

    public function index(Request $request){

        $query = Pelicula::with('genero');

        if ($request->search) {
            $query->where('titulo', 'like', '%' . $request->search . '%');
        }

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
        $genero = Genero::where('nom_minus', $slug)->firstOrFail();

        $query = Pelicula::where('genero_id', $genero->id)->with('genero');

        if ($request->search) {
            $query->where('titulo', 'like', '%' . $request->search . '%');
        }

        return Inertia::render('Domain/Peliculas/listaPeliculas', [
            'peliculas' => $query->latest()->get(),
            'filters' => [
                'search' => $request->search,
                'genero' => $genero->nombre
            ],
            'generoActual' => $genero
        ]);
    }
}
