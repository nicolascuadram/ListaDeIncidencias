import { useState } from 'react';

export default function Sidebar() {
    const [activeItem, setActiveItem] = useState('incidencias');

    return (
        <aside className="w-80 bg-white border-r border-gray-200">
            <div className="p-6 border-b border-gray-200">
                <div className="flex items-center">
                    <div className="w-10 h-10 mr-3">
                        <img src="/favicon.svg" alt="Logo" className="w-10 h-10" />
                    </div>
                    <h1 className="text-2xl font-bold text-red-600">Incidencias Utal</h1>
                </div>
            </div>

            <div className="py-4">
                <h2 className="px-6 text-xs font-semibold text-gray-600 uppercase tracking-wide mb-3">TRABAJO</h2>

                <nav className="mt-2">
                    <a
                        href="/"
                        className={`flex items-center px-6 py-3 ${activeItem === 'incidencias' ? 'bg-red-50 border-l-4 border-red-500' : ''}`}
                        onClick={() => setActiveItem('incidencias')}
                    >
                        <span className="mr-3">
                            <svg viewBox="0 0 24 24" className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor">
                                <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2" />
                            </svg>
                        </span>
                        <span className={`text-lg ${activeItem === 'incidencias' ? 'text-red-600 font-medium' : 'text-gray-700'}`}>Incidencias</span>
                    </a>

                    <a
                        href="/reportes"
                        className={`flex items-center px-6 py-3 ${activeItem === 'reportes' ? 'bg-red-50 border-l-4 border-red-500' : ''}`}
                        onClick={() => {
                            setActiveItem('reportes');
                            window.location.href = '/reportes'; // Cambia '/reportes' por la ruta deseada
                        }}
                    >
                        <span className="mr-3">
                            <svg viewBox="0 0 24 24" className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor">
                                <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2" />
                            </svg>
                        </span>
                        <span className="text-lg text-gray-700">Reportes</span>
                    </a>

                    <a
                        href="/mapa"
                        className={`flex items-center px-6 py-3 ${activeItem === 'mapa' ? 'bg-red-50 border-l-4 border-red-500' : ''}`}
                        onClick={() => {
                            setActiveItem('mapa');
                            window.location.href = '/mapa'; // Cambia '/mapa' por la ruta deseada
                        }}
                    >
                        <span className="mr-3">
                            <svg viewBox="0 0 24 24" className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor">
                                <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2" />
                            </svg>
                        </span>
                        <span className="text-lg text-gray-700">Mapa</span>
                    </a>
                </nav>
            </div>

            <div className="mt-auto py-4">
                <h2 className="px-6 text-xs font-semibold text-gray-600 uppercase tracking-wide mb-3">OPCIONES</h2>

                <nav className="mt-2">
                    <a
                        href="#"
                        className="flex items-center px-6 py-3"
                        onClick={() => {
                            window.location.href = '/micuenta'; // Cambia '/mi-cuenta' por la ruta deseada
                        }}
                    >
                        <span className="mr-3">
                            <svg viewBox="0 0 24 24" className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor">
                                <circle cx="12" cy="12" r="8" strokeWidth="2" />
                                <path d="M12 8v8M8 12h8" strokeWidth="2" />
                            </svg>
                        </span>
                        <span className="text-lg text-gray-700">Mi Cuenta</span>
                    </a>

                    <a
                        href="#"
                        className="flex items-center px-6 py-3"
                        onClick={() => {
                            window.location.href = '/cerrarsesion'; // Cambia '/cerrar-sesion' por la ruta deseada
                        }}
                    >
                        <span className="mr-3">
                            <svg viewBox="0 0 24 24" className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor">
                                <path d="M15 3H7a2 2 0 00-2 2v14a2 2 0 002 2h8m4-9l-4-4m0 0l-4 4m4-4v12" strokeWidth="2" />
                            </svg>
                        </span>
                        <span className="text-lg text-gray-700">Cerrar Sesión</span>
                    </a>
                </nav>
            </div>
        </aside>
    );
}