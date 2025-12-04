<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory; 
use Illuminate\Database\Eloquent\Model;

class Genero extends Model
{
    use HasFactory;

    protected $fillable = ['nombre', 'slug'];

    public function peliculas()
    {
        return $this->hasMany(Pelicula::class);
    }
}
