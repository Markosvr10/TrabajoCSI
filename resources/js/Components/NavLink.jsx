import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ease-out ' +
                (active
                    ? 'bg-white text-violet-700 shadow-lg scale-105 ' // ACTIVO: Blanco, texto violeta, sombra y un poco grande
                    : 'text-violet-100 hover:bg-white/10 hover:text-white hover:scale-110 hover:shadow-md ') + // INACTIVO: Transparente, se agranda mucho (110%) al pasar ratón
                className
            }
        >
            {children}
        </Link>
    );
}

