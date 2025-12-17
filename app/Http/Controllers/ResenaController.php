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
        //Validar los datos que vienen del formulario
        $validated = $request->validate([
            'titulo' => 'nullable|string|max:255',
            'contenido' => 'required|string',
        ]);

        $pelicula = Pelicula::findOrFail($peliculaId);

        //Crear la reseña vinculada al usuario y a la película
        // Usamos updateOrCreate para evitar duplicados
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
