import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';
import { useState } from 'react';

// Recibimos 'peliculas' (todas) y los filtros actuales
export default function ListaPeliculas({ auth, peliculas, filters }) {

    // Estado para la barra de búsqueda
    const [busqueda, setBusqueda] = useState(filters.search || '');

    // Función para buscar al pulsar Enter o el botón
    const buscarPeliculas = (e) => {
        e.preventDefault();
        // Enviamos la petición al backend manteniendo el estado
        router.get('/peliculas', { search: busqueda }, { preserveState: true });
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Catálogo de Películas" />

            {/* --- CABECERA CON BUSCADOR --- */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm">
                <div className="max-w-7xl mx-auto py-6 px-4 flex flex-col md:flex-row justify-between items-center gap-4">

                    {/* Título y Contador */}
                    <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                        Catálogo Completo
                        <span className="ml-3 text-xs font-bold text-white bg-violet-600 px-3 py-1 rounded-full uppercase tracking-wider">
                            {peliculas.length} Títulos
                        </span>
                    </h2>

                    {/* Formulario de Búsqueda */}
                    <form onSubmit={buscarPeliculas} className="relative w-full md:w-96">
                        <input
                            type="text"
                            className="w-full pl-10 pr-4 py-2 rounded-full border-gray-300 focus:border-violet-500 focus:ring-violet-500 shadow-sm transition"
                            placeholder="Buscar película, director..."
                            value={busqueda}
                            onChange={(e) => setBusqueda(e.target.value)}
                        />
                        {/* Icono de Lupa (Botón) */}
                        <button type="submit" className="absolute left-3 top-2.5 text-gray-400 hover:text-violet-600 transition">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </form>
                </div>
            </div>

            {/* --- REJILLA DE PELÍCULAS --- */}
            <div className="py-12 bg-gray-50 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {peliculas.length > 0 ? (
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                            {peliculas.map((pelicula) => (
                                <Link
                                    key={pelicula.id}
                                    href={route('pelicula.show', pelicula.id)}
                                    className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 flex flex-col h-full"
                                >
                                    <div className="aspect-[2/3] w-full bg-gray-200 relative overflow-hidden">
                                        <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded z-10 border border-white/20">
                                            ★ {pelicula.valoracion}
                                        </div>

                                        <img
                                            src={pelicula.imagen_url}
                                            alt={pelicula.titulo}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />

                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <span className="text-white font-bold bg-violet-600 px-4 py-2 rounded-full text-sm shadow-lg">
                                                Ver Detalles
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-4 flex-1 flex flex-col justify-between">
                                        <div>
                                            <div className="text-[10px] font-bold text-violet-600 uppercase tracking-wider mb-1">
                                                {pelicula.genero?.nombre || 'General'}
                                            </div>
                                            <h3 className="text-gray-900 font-bold text-sm leading-tight line-clamp-2 mb-1" title={pelicula.titulo}>
                                                {pelicula.titulo}
                                            </h3>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-2 pt-2 border-t border-gray-100 flex justify-between">
                                            <span>{pelicula.ano_lanzamiento}</span>
                                            <span className="truncate max-w-[50%] text-right">{pelicula.director}</span>
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        // Estado Vacío (Sin resultados)
                        <div className="flex flex-col items-center justify-center py-20 text-center">
                            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-gray-400">
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">No hemos encontrado nada</h3>
                            <p className="text-gray-500 max-w-md">No hay películas que coincidan con tu búsqueda. Intenta con otro título o revisa la ortografía.</p>
                        </div>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}