import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    const isLogin = window.location.pathname === '/login';

    return (
        <div className="flex min-h-screen bg-white overflow-hidden">

            <div className="hidden lg:block lg:w-1/2 relative bg-gray-900">
                <img
                    src="https://img.freepik.com/foto-gratis/collaje-fondo-pelicula_23-2149876006.jpg?semt=ais_hybrid&w=740&q=80"
                    alt="Cine Background"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-violet-900/90 to-indigo-900/80 mix-blend-multiply"></div>

                <div className="absolute top-0 bottom-0 right-0 w-16 lg:w-24 overflow-hidden pointer-events-none z-20">
                    <svg
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        className="h-full w-full text-white fill-current scale-x-[-1]"
                    >
                        <path d="M0 0 C 50 0 80 50 50 100 L 0 100 Z" />
                    </svg>
                </div>

                <div className="absolute bottom-0 left-0 p-16 text-white z-30">
                    <h2 className="text-4xl font-bold tracking-tight">
                        {isLogin ? 'Bienvenido de nuevo.' : 'Bienvenido a MarkiFilms.'}
                    </h2>

                </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 sm:p-12 lg:p-24 bg-white relative z-10">

                <div className="absolute top-6 right-6">
                    <Link href="/" className="text-sm font-medium text-gray-400 hover:text-violet-600 transition flex items-center gap-1">
                        <span>&larr;</span> Volver al inicio
                    </Link>
                </div>

                <div className="w-full max-w-md space-y-8">
                    <div className="text-center">
                        <Link href="/">
                            <h1 className="text-4xl font-extrabold text-violet-700 tracking-tighter hover:text-violet-800 transition">
                                Markifilms
                            </h1>
                        </Link>
                        <h2 className="mt-2 text-sm font-medium text-gray-500">
                            {isLogin ? 'Inicia sesión en tu cuenta' : 'Crea tu nueva cuenta'}
                        </h2>
                    </div>

                    <div className="mt-8 bg-white">
                        {children}
                    </div>

                    <div className="mt-6 text-center text-xs text-gray-400">
                        &copy; 2025 Markifilms. Todos los derechos reservados.
                    </div>
                </div>
            </div>
        </div>
    );
}