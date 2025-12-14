<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory; 
use Illuminate\Database\Eloquent\Model;

class Pelicula extends Model
{
    use HasFactory; 

    protected $fillable = [
        'titulo',
        'descripcion',
        'director',
        'ano_lanzamiento',
        'genero_id',
        'valoracion',
        'imagen_url',
    ];


    public function genero()
    {
        return $this->belongsTo(Genero::class);
    }


    public function users()
    {
        return $this->belongsToMany(User::class, 'pelicula_user')->withTimestamps();
    }

    public function resenas()
    {
        return $this->hasMany(Resena::class);
    }
}