<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\resena;
use App\Models\Pelicula;
use Illuminate\Support\Facades\Auth;

class ResenaController extends Controller
{
    public function store(Request $request, $peliculaId)
    {
        $validated = $request->validate([
            'titulo' => 'nullable|string|max:255',
            'contenido' => 'required|string',
        ]);

        $pelicula = Pelicula::findOrFail($peliculaId);

        Resena::updateOrCreate(
            [
                'user_id' => Auth::id(),
                'pelicula_id' => $pelicula->id,
            ],
            [
                'titulo' => $validated['titulo'],
                'contenido' => $validated['contenido'],
                'puntuacion' => 0,
            ]
        );

        return back();
    }
}
