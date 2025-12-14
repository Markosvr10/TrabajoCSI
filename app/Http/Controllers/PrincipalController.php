<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class PrincipalController extends Controller
{
    public function index()
    {

        $user = Auth::user();


        $favoritas = $user->favoritas()->latest()->get(); 

        return Inertia::render('Core/Principal', [
            'peliculasFavoritas' => $favoritas
        ]);
    }
}