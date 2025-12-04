import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function DetallePelicula({ auth, pelicula, esFavorita }) {

    // Hook para manejar la petición POST
    const { post, processing } = useForm();

    const toggleFavorito = () => {

        post(route('favoritos.toggle', pelicula.id), {
            preserveScroll: true,
            onSuccess: () => {
                console.log('Favorito actualizado correctamente');
            },
        });
    };

    const renderEstrellas = (nota) => {
        const valor = nota || 0;
        return [...Array(5)].map((_, index) => (
            <span key={index} className={index + 1 <= Math.round(valor) ? "text-yellow-500" : "text-gray-500"}>★</span>
        ));
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title={pelicula.titulo} />

            <div className="relative bg-gray-900 min-h-[500px] overflow-hidden">
                <img src={pelicula.imagen_url} className="absolute inset-0 w-full h-full object-cover opacity-20 blur-2xl scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-gray-900/60 to-gray-900/90"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                    <Link href="/principal" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition group">
                        <span className="mr-2 group-hover:-translate-x-1 transition-transform">&larr;</span> Volver al inicio
                    </Link>

                    <div className="flex flex-col md:flex-row gap-10 items-start">

                        {/* PÓSTER */}
                        <div className="w-full md:w-1/3 lg:w-1/4 flex-shrink-0">
                            <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10 relative group bg-black">
                                <img src={pelicula.imagen_url} alt={pelicula.titulo} className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-700" />
                                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md text-white font-bold px-3 py-1 rounded-lg border border-white/20 shadow-lg">
                                    ★ {pelicula.valoracion}
                                </div>
                            </div>
                        </div>

                        {/* INFO */}
                        <div className="flex-1 text-white">
                            <div className="flex items-center gap-3 text-sm font-semibold tracking-wide uppercase text-violet-300 mb-4">
                                <span className="bg-violet-500/20 px-3 py-1 rounded-full border border-violet-500/30">
                                    {pelicula.genero?.nombre || 'General'}
                                </span>
                                <span className="text-gray-500">•</span>
                                <span>{pelicula.ano_lanzamiento}</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6 drop-shadow-xl">
                                {pelicula.titulo}
                            </h1>

                            <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-300 border-b border-white/10 pb-8">
                                <div className="flex items-center gap-1 text-xl text-yellow-500">
                                    {renderEstrellas(pelicula.valoracion)}
                                    <span className="text-sm text-gray-500 ml-2 font-normal">({pelicula.valoracion}/5)</span>
                                </div>
                                <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full"></div>
                                <div>Director: <span className="text-white font-medium ml-1">{pelicula.director}</span></div>
                            </div>

                            <div className="prose prose-lg prose-invert max-w-none mb-10">
                                <h3 className="text-2xl font-bold text-white mb-4">Sinopsis</h3>
                                <p className="text-gray-300 leading-relaxed text-lg opacity-90">
                                    {pelicula.descripcion}
                                </p>
                            </div>

                            {/* BOTONES */}
                            <div className="flex flex-wrap gap-4">
                                <button className="px-8 py-3 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-full transition shadow-lg hover:shadow-violet-600/40 transform hover:-translate-y-0.5">
                                    Ver Trailer
                                </button>

                                {/* BOTÓN FAVORITOS*/}
                                {esFavorita ? (
                                    <button
                                        type="button"
                                        onClick={toggleFavorito}
                                        disabled={processing}
                                        className="px-6 py-3 bg-violet-200 hover:bg-violet-200 text-black font-bold rounded-full transition backdrop-blur border border-white/10 flex items-center gap-2"
                                    >
                                        <span>-</span> Quitar de Favoritos
                                    </button>
                                ) : (
                                    <button
                                        type="button"
                                        onClick={toggleFavorito}
                                        disabled={processing}
                                        className="px-6 py-3 bg-white/10 hover:bg-white/20 text-black font-bold rounded-full transition backdrop-blur border border-white/10 flex items-center gap-2"
                                    >
                                        <span>+</span> Añadir a Favoritos
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 py-16 border-t border-gray-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                        Reseñas
                    </h3>

                    <div className="bg-white rounded-2xl p-12 border border-gray-200 shadow-sm text-center">
                        <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                        </div>
                        <h4 className="text-lg font-bold text-gray-900">Aún no hay reseñas</h4>
                        <p className="text-gray-500 mb-8 max-w-sm mx-auto">Sé el primero en compartir tu opinión sobre esta película con la comunidad.</p>
                        <button className="px-8 py-2.5 bg-gray-900 text-white font-medium rounded-lg hover:bg-black transition cursor-not-allowed opacity-50 shadow-lg">
                            Escribir reseña (Próximamente)
                        </button>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}