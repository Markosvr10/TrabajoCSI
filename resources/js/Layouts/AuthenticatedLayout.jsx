import { useState } from 'react';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    const { listaGeneros } = usePage().props || {};

    return (
        <div className="min-h-screen bg-gray-900">
            <nav className="bg-gradient-to-r from-violet-700 via-purple-700 to-indigo-800 shadow-2xl rounded-b-[2rem] border-b-0 relative z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-20 items-center">
                        <div className="flex items-center gap-8">
                            <div className="shrink-0 flex items-center">
                                <Link href="/">
                                    <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-tr from-white to-violet-200 tracking-tighter hover:scale-105 transition-transform duration-300 drop-shadow-sm">
                                        MarkiFilms
                                    </h1>
                                </Link>
                            </div>

                            <div className="hidden space-x-2 sm:-my-px sm:flex">

                                <NavLink href="/principal" active={window.location.pathname === '/principal'}>
                                    Inicio
                                </NavLink>

                                <NavLink href="/peliculas" active={window.location.pathname === '/peliculas'}>
                                    Películas
                                </NavLink>

                                <div className="relative ms-2">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md">
                                                {/* Botón estilizado igual que tus NavLinks pero con flecha */}
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-4 font-bold rounded-full text-violet-100 hover:text-white hover:bg-white/10 hover:scale-105 focus:outline-none transition ease-in-out duration-150"
                                                >
                                                    Géneros

                                                    <svg
                                                        className="ms-1.5 -me-0.5 h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                            </span>
                                        </Dropdown.Trigger>

                                        <Dropdown.Content width="48">
                                            {/* Contenedor con scroll por si hay muchos géneros */}
                                            <div className="max-h-64 overflow-y-auto">
                                                {/* Cabecera del dropdown */}
                                                <div className="px-4 py-2 text-xs text-gray-400 font-semibold uppercase tracking-wider border-b border-gray-100">
                                                    Selecciona un género
                                                </div>

                                                {/* Renderizado dinámico de la lista */}
                                                {listaGeneros && listaGeneros.length > 0 ? (
                                                    listaGeneros.map((genero) => (
                                                        <Dropdown.Link
                                                            key={genero.id}
                                                            href={`/mis-peliculas?genero=${genero.id}`}
                                                        >
                                                            {genero.nombre}
                                                        </Dropdown.Link>
                                                    ))
                                                ) : (
                                                    <div className="px-4 py-3 text-sm text-gray-500 italic text-center">
                                                        No hay géneros disponibles
                                                    </div>
                                                )}
                                            </div>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>

                        <div className="hidden sm:flex sm:items-center sm:ms-6">
                            <div className="ms-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-4 font-bold rounded-full text-violet-700 bg-white hover:bg-gray-100 hover:scale-105 hover:shadow-lg focus:outline-none transition ease-out duration-200"
                                            >
                                                {user?.name || 'Usuario'}

                                                <svg className="ms-2 -me-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href={route('profile.edit')}>Perfil</Dropdown.Link>
                                        <div className="border-t border-gray-100 my-1"></div>
                                        <Dropdown.Link href={route('logout')} method="post" as="button">
                                            Cerrar Sesión
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        {/* BOTÓN MÓVIL (HAMBURGUESA) */}
                        <div className="-me-2 flex items-center sm:hidden">
                            <button
                                onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                className="inline-flex items-center justify-center p-2 rounded-full text-violet-200 hover:text-white hover:bg-white/10 focus:outline-none transition duration-150 ease-in-out"
                            >
                                <svg className="h-8 w-8" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                                    <path className={showingNavigationDropdown ? 'inline-flex' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* MENÚ MÓVIL DESPLEGABLE */}
                {/* El menú móvil lo mantenemos recto para que no corte el contenido al abrirse */}
                <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden bg-violet-900 rounded-b-3xl pb-4 shadow-inner'}>
                    <div className="pt-2 pb-3 space-y-1 px-4">
                        <ResponsiveNavLink href="/principal" className="text-white hover:bg-white/10 rounded-lg">Inicio</ResponsiveNavLink>
                        <ResponsiveNavLink href="/mis-peliculas" className="text-white hover:bg-white/10 rounded-lg">Películas</ResponsiveNavLink>
                        <ResponsiveNavLink href="/series" className="text-white hover:bg-white/10 rounded-lg">Series</ResponsiveNavLink>
                        <ResponsiveNavLink href="/generos" className="text-white hover:bg-white/10 rounded-lg">Géneros</ResponsiveNavLink>
                    </div>
                    <div className="pt-4 pb-1 border-t border-violet-700/50 mx-4">
                        <div className="px-2 mb-2">
                            <div className="font-bold text-lg text-white">{user?.name}</div>
                            <div className="font-medium text-sm text-violet-300">{user?.email}</div>
                        </div>
                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink method="post" href={route('logout')} as="button" className="text-violet-200 hover:text-white hover:bg-white/10 rounded-lg">
                                Cerrar Sesión
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            {/* HEADER OPCIONAL */}
            {/* Le damos margen arriba para que se separe de la curva */}
            {header && (
                <header className="bg-white shadow-sm relative z-10 mt-6 mx-4 sm:mx-8 rounded-2xl">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-gray-800">
                        {header}
                    </div>
                </header>
            )}

            <main className="relative z-0">{children}</main>
        </div>
    );
}