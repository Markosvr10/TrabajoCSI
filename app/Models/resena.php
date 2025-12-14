<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class resena extends Model
{
     protected $fillable = [
        'user_id', 
        'pelicula_id', 
        'titulo', 
        'contenido', 
        'puntuacion'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function pelicula()
    {
        return $this->belongsTo(Pelicula::class);
    }
}
