import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Bienvenida a Markifilms" />

            <div className="flex min-h-screen bg-white overflow-hidden">

                <div className="w-full md:w-[45%] flex flex-col justify-center px-10 sm:px-16 lg:px-24 z-10 relative">

                    <div className="mb-6">
                        <span className="text-violet-600 font-bold tracking-wider uppercase text-xs sm:text-sm bg-violet-50 px-3 py-1 rounded-full">
                            Comunidad de Cine
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                        Tu opinión <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
                            cuenta aquí.
                        </span>
                    </h1>

                    <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                        Bienvenido a <strong>Markifilms</strong>. La plataforma informativa sobre peliculas donde
                        tendras la posibilidad de leer <strong>reseñas</strong> honestas, descubrir joyas ocultas
                        y debatir con otros fans en nuestros <strong>foros</strong>.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        {auth.user ? (
                            <Link
                                href="/principal"
                                className="px-8 py-3 rounded-full bg-violet-600 text-white font-bold shadow-lg hover:bg-violet-700 hover:shadow-violet-500/30 transition transform hover:-translate-y-0.5 text-center"
                            >
                                Entrar a la Comunidad
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href="/register"
                                    className="px-8 py-3 rounded-full bg-violet-600 text-white font-bold shadow-lg hover:bg-violet-700 hover:shadow-violet-500/30 transition transform hover:-translate-y-0.5 text-center"
                                >
                                    Unirme Gratis
                                </Link>

                                <Link
                                    href="/login"
                                    className="px-8 py-3 rounded-full bg-white text-violet-700 font-bold border-2 border-violet-100 hover:border-violet-600 hover:bg-violet-50 transition transform hover:-translate-y-0.5 text-center"
                                >
                                    Iniciar Sesión
                                </Link>
                            </>
                        )}
                    </div>

                    <div className="mt-12 flex items-center gap-4 text-sm text-gray-400">
                        <span>© 2024 Markifilms</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                        <span>Reseñas & Foros</span>
                    </div>
                </div>

                <div className="hidden md:block md:w-[55%] relative bg-gray-900">
                    <img
                        src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                        alt="Sala de cine"
                        className="absolute inset-0 w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-900/50 to-black/80 mix-blend-multiply"></div>
                    <div className="absolute top-0 bottom-0 left-0 w-16 lg:w-24 overflow-hidden pointer-events-none">
                        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full text-white fill-current">
                            <path d="M0 0 C 50 0 80 50 50 100 L 0 100 Z" />
                        </svg>
                    </div>
                    <div className="absolute bottom-12 right-12 max-w-md text-right text-white">
                        <blockquote className="text-2xl font-serif italic opacity-90 leading-relaxed">
                            "No hay forma correcta o incorrecta de ver una película, solo la tuya."
                        </blockquote>
                    </div>
                </div>

            </div>
        </>
    );
}