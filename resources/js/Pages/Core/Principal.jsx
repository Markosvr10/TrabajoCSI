import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

// Recibimos 'auth' y 'peliculasFavoritas'.
// IMPORTANTE: Ponemos ' = []' para que si falla el backend, no explote la pantalla.
export default function Principal({ auth, peliculasFavoritas = [] }) {

    // Función para pintar estrellas según la nota (ej: 3.5)
    const renderEstrellas = (nota) => {
        return [...Array(5)].map((_, index) => {
            const estrellaNumero = index + 1;
            return (
                <span
                    key={index}
                    className={
                        estrellaNumero <= Math.round(nota)
                            ? "text-yellow-400"
                            : "text-gray-300"
                    }
                >
                    ★
                </span>
            );
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={null}
        >
            <Head title="Inicio" />

            {/* --- SECCIÓN 1: HERO / SALUDO --- */}
            <div className="bg-white border-b border-gray-200 shadow-sm relative z-10">
                <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-extrabold text-gray-900">
                        Hola de nuevo, <span className="text-violet-600">{auth?.user?.name}</span>.
                    </h1>
                    <p className="mt-2 text-gray-500 text-lg">
                        Aquí tienes un resumen de tu colección personal.
                    </p>
                </div>
            </div>

            {/* --- CONTENIDO PRINCIPAL --- */}
            <div className="py-12 bg-gray-50 min-h-screen">
                <div className="max-w-7xl mx-auto">

                    {/* CABECERA DE SECCIÓN (Título + Botón Ver Todo) */}
                    <div className="flex items-center justify-between mb-6 px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                            <svg className="w-6 h-6 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                            Tus Favoritos
                        </h2>

                        <Link href="/mis-peliculas" className="text-sm font-semibold text-violet-600 hover:text-violet-800 transition">
                            Ver todo &rarr;
                        </Link>
                    </div>

                    {/*CARRUSEL HORIZONTAL*/}
                    {peliculasFavoritas && peliculasFavoritas.length > 0 ? (
                        // Contenedor del Scroll
                        // overflow-x-auto: Permite scroll horizontal
                        // snap-x: Efecto magnético al soltar
                        <div className="relative w-full flex gap-6 snap-x snap-mandatory overflow-x-auto pb-14 px-4 sm:px-6 lg:px-8 scrollbar-hide">

                            {peliculasFavoritas.map((pelicula) => (
                                <div
                                    key={pelicula.id}
                                    className="snap-center shrink-0 w-[160px] md:w-[200px] group relative bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2"
                                >
                                    {/* IMAGEN (Poster Vertical) */}
                                    <div className="aspect-[2/3] w-full bg-gray-200 relative overflow-hidden">
                                        {/* Badge de Nota Flotante */}

                                        <img
                                            src={pelicula.imagen_url}
                                            alt={pelicula.titulo}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />

                                        {/* Overlay Oscuro al Hover */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                                            <Link href={route('pelicula.show', pelicula.id)}>
                                                <button className="w-full py-2 bg-violet-600 text-white text-xs font-bold rounded shadow-lg hover:bg-violet-500 transition">
                                                    Ver Detalles
                                                </button>
                                            </Link>
                                        </div>
                                    </div>

                                    {/* INFO DEBAJO DE LA IMAGEN */}
                                    <div className="p-3">
                                        <h3 className="text-gray-900 font-bold text-sm leading-tight truncate" title={pelicula.titulo}>
                                            {pelicula.titulo}
                                        </h3>
                                        <p className="text-xs text-gray-500 mt-1 mb-2">
                                            {pelicula.nombre}{pelicula.ano_lanzamiento}
                                        </p>

                                        <div className="flex text-[10px] gap-0.5">
                                            {renderEstrellas(pelicula.valoracion)}
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Tarjeta "Ver Más" al final del carrusel */}
                            <Link
                                href="/mis-peliculas"
                                className="snap-center shrink-0 w-[160px] md:w-[200px] flex flex-col items-center justify-center bg-gray-100 rounded-xl border-2 border-dashed border-gray-300 hover:border-violet-400 hover:bg-violet-50 transition cursor-pointer group"
                            >
                                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition">
                                    <span className="text-2xl text-violet-500 font-bold">+</span>
                                </div>
                                <span className="mt-3 text-sm font-medium text-gray-500 group-hover:text-violet-600">Ver colección</span>
                            </Link>

                        </div>
                    ) : (
                        //lista está vacía o falla
                        <div className="mx-4 sm:mx-6 lg:mx-8 bg-white rounded-2xl p-12 text-center border-2 border-dashed border-gray-200 shadow-sm">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-violet-50 mb-4 text-violet-400">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                            </div>
                            <h3 className="text-lg font-medium text-gray-900">
                                {peliculasFavoritas === undefined ? 'Error de conexión' : 'Tu lista está vacía'}
                            </h3>
                            <p className="mt-1 text-gray-500 max-w-sm mx-auto mb-6">
                                Las películas que marques como favoritas aparecerán aquí para un acceso rápido.
                            </p>
                            <Link href="/peliculas" className="inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-sm font-medium rounded-full text-white bg-violet-600 hover:bg-violet-700 transition transform hover:-translate-y-0.5">
                                Explorar Películas
                            </Link>
                        </div>
                    )}

                </div>
            </div>

        </AuthenticatedLayout>
    );
}