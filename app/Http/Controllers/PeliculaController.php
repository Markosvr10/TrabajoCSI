<?php

namespace App\Http\Controllers;

use App\Models\Pelicula;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class PeliculaController extends Controller
{
    public function show($id)
    {
       
        $pelicula = Pelicula::with('genero')->findOrFail($id);

        $esFavorita = false;

        if (Auth::check()) {
            $esFavorita = Auth::user()->favoritas()->where('pelicula_id', $id)->exists();
        }

        // 3. Enviamos los datos a la vista
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
}
