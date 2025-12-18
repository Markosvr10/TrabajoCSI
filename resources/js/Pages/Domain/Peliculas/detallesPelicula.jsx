import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function DetallePelicula({ auth, pelicula, esFavorita }) {

    const { post: postFavorito, processing: processingFavorito } = useForm();

    const toggleFavorito = () => {
        postFavorito(route('favoritos.toggle', pelicula.id), {
            preserveScroll: true,
        });
    };

    const { data, setData, post: postResena, processing: processingResena, reset, errors } = useForm({
        titulo: '',
        contenido: '',
    });

    const submitResena = (e) => {
        e.preventDefault();
        postResena(route('resenas.store', pelicula.id), {
            preserveScroll: true,
            onSuccess: () => reset(), // Limpia el formulario al terminar
        });
    };

    // funcion para la estrella
    const renderEstrellas = (nota) => {
        const valor = nota || 0;
        return [...Array(5)].map((_, index) => (
            <span key={index} className={index + 1 <= Math.round(valor) ? "text-yellow-400" : "text-gray-500"}>★</span>
        ));
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title={pelicula.titulo} />

            <div className="relative bg-gray-900 min-h-[500px] overflow-hidden">
                <img src={pelicula.imagen_url} className="absolute inset-0 w-full h-full object-cover opacity-20 blur-2xl scale-110" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-gray-900/60 to-gray-900/90"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                    <Link href="/principal" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition group">
                        <span className="mr-2 group-hover:-translate-x-1 transition-transform">&larr;</span> Volver al inicio
                    </Link>

                    <div className="flex flex-col md:flex-row gap-10 items-start">
                        <div className="w-full md:w-1/3 lg:w-1/4 flex-shrink-0">
                            <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10 relative group bg-black">
                                <img src={pelicula.imagen_url} alt={pelicula.titulo} className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-700" />
                                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md text-white font-bold px-3 py-1 rounded-lg border border-white/20 shadow-lg">
                                    ★ {pelicula.valoracion}
                                </div>
                            </div>
                        </div>

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

                            {/* Botónes */}
                            <div className="flex flex-wrap gap-4">
                                <a href={pelicula.trailer_url}>
                                    <button className="px-8 py-3 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-full transition shadow-lg hover:shadow-violet-600/40 transform hover:-translate-y-0.5">
                                        Ver Trailer
                                    </button>
                                </a>

                                <button
                                    type="button"
                                    onClick={toggleFavorito}
                                    disabled={processingFavorito}
                                    className={`px-8 py-3 font-bold rounded-full transition border flex items-center gap-2 transform hover:-translate-y-0.5 ${esFavorita
                                        ? 'bg-red-500/90 hover:bg-red-600 text-white border-transparent shadow-lg shadow-red-500/20'
                                        : 'bg-white/5 hover:bg-white/10 text-white border-white/20 backdrop-blur-sm'
                                        } ${processingFavorito ? 'opacity-50 cursor-not-allowed' : ''}`}
                                >
                                    {esFavorita ? (
                                        <><span>-</span> Quitar de Favoritos</>
                                    ) : (
                                        <><span>+</span> Añadir a Favoritos</>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- SECCIÓN INFERIOR: RESEÑAS INFORMATIVAS --- */}
            <div className="bg-gray-50 py-16 border-t border-gray-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                    <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                        Comentarios de la comunidad
                        <span className="bg-violet-100 text-violet-700 text-sm font-bold py-1 px-3 rounded-full">
                            {pelicula.resenas.length}
                        </span>
                    </h3>

                    {/* FORMULARIO DE RESEÑA */}
                    <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm mb-12">
                        <h4 className="text-lg font-bold text-gray-800 mb-6 border-b border-gray-100 pb-2">Deja tu comentario</h4>

                        <form onSubmit={submitResena} className="space-y-6">

                            <div>
                                <label htmlFor="titulo" className="block text-sm font-medium text-gray-700 mb-1">Título</label>
                                <input
                                    id="titulo"
                                    type="text"
                                    className="w-full rounded-lg border-gray-300 focus:border-violet-500 focus:ring-violet-500 shadow-sm transition"
                                    placeholder="Resumen de tu opinión..."
                                    value={data.titulo}
                                    onChange={e => setData('titulo', e.target.value)}
                                />
                                {errors.titulo && <div className="text-red-500 text-xs mt-1">{errors.titulo}</div>}
                            </div>

                            <div>
                                <label htmlFor="contenido" className="block text-sm font-medium text-gray-700 mb-1">Tu opinión</label>
                                <textarea
                                    id="contenido"
                                    rows="4"
                                    className="w-full rounded-lg border-gray-300 focus:border-violet-500 focus:ring-violet-500 shadow-sm transition"
                                    placeholder="Comparte tus pensamientos sobre la película..."
                                    value={data.contenido}
                                    onChange={e => setData('contenido', e.target.value)}
                                ></textarea>
                                {errors.contenido && <div className="text-red-500 text-xs mt-1">{errors.contenido}</div>}
                            </div>

                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    disabled={processingResena}
                                    className="px-8 py-2.5 bg-violet-600 text-white font-bold rounded-lg hover:bg-violet-700 transition shadow-lg shadow-violet-600/20 disabled:opacity-50 transform hover:-translate-y-0.5"
                                >
                                    Publicar Comentario
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* LISTA DE COMENTARIOS (SIN ESTRELLAS) */}
                    <div className="space-y-6">
                        {pelicula.resenas && pelicula.resenas.length > 0 ? (
                            pelicula.resenas.map((resena) => (
                                <div key={resena.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition duration-300">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex items-center gap-3">
                                            {/* Avatar (Inicial del nombre) */}
                                            <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center text-violet-700 font-bold text-lg border border-violet-200">
                                                {resena.user?.name.charAt(0).toUpperCase()}
                                            </div>
                                            <div>
                                                <div className="font-bold text-gray-900">{resena.user?.name}</div>
                                                <div className="text-xs text-gray-500">
                                                    {new Date(resena.created_at).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {resena.titulo && (
                                        <h5 className="font-bold text-gray-800 mb-2 text-lg">{resena.titulo}</h5>
                                    )}

                                    <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                                        {resena.contenido}
                                    </p>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-16 bg-white rounded-2xl border-2 border-dashed border-gray-300">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4 text-gray-400">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                                </div>
                                <h4 className="text-lg font-medium text-gray-900">Aún no hay comentarios</h4>
                                <p className="text-gray-500 mt-1">Sé el primero en opinar sobre esta película.</p>
                            </div>
                        )}
                    </div>

                </div>
            </div>

        </AuthenticatedLayout>
    );
}