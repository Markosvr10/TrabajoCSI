<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PrincipalController;
use App\Http\Controllers\PeliculaController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::redirect('/', '/Bienvenida');    

Route::get('/', function () {
    return Inertia::render('Core/Welcome', [ 
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('welcome');

Route::get('/pelicula/{id}', [PeliculaController::class, 'show'])
    ->middleware(['auth', 'verified'])
    ->name('pelicula.show');

Route::post('/pelicula/{id}/favorito', [PeliculaController::class, 'toggleFavorito'])
    ->middleware(['auth', 'verified'])
    ->name('favoritos.toggle');

Route::get('/principal', [PrincipalController::class, 'index'])
    ->middleware(['auth', 'verified'])
    ->name('principal');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
