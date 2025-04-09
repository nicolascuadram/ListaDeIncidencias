import { useState } from 'react';

export default function IncidenciaCard({ incidencia, onEliminar, onModificar }) {
    const [isEditing, setIsEditing] = useState(false);
    const [datosEditados, setDatosEditados] = useState(incidencia);

    // Manejar cambios en los inputs del formulario de edición
    const handleChange = (e) => {
        setDatosEditados({ ...datosEditados, [e.target.name]: e.target.value });
    };

    // Guardar los cambios editados
    const guardarCambios = () => {
        onModificar(incidencia.id, datosEditados);
        setIsEditing(false);
    };

    return (
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            {isEditing ? (
                <div className="space-y-4">
                    <input
                        type="text"
                        name="title"
                        value={datosEditados.title}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-lg text-gray-800"
                        placeholder="Título de la incidencia"
                    />
                    <input
                        type="text"
                        name="type"
                        value={datosEditados.type}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-lg text-gray-800"
                        placeholder="Tipo de incidencia"
                    />
                    <input
                        type="text"
                        name="author"
                        value={datosEditados.author}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-lg text-gray-800"
                        placeholder="Autor"
                    />
                    <div className="flex justify-end space-x-2">
                        <button
                            onClick={guardarCambios}
                            className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium hover:bg-green-600"
                        >
                            Guardar
                        </button>
                        <button
                            onClick={() => setIsEditing(false)}
                            className="bg-gray-500 text-white px-4 py-1 rounded-full text-sm font-medium hover:bg-gray-600"
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
            ) : (
                <>
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">{incidencia.title}</h2>
                    <div className="flex items-center justify-between">
                        <div>
                            <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                                {incidencia.type}
                            </span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <span className="text-gray-600">{incidencia.author}</span>
                            <button
                                onClick={() => setIsEditing(true)}
                                className="p-1 rounded-full cursor-pointer"
                                title="Editar"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6 text-gray-500"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <path
                                        d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                                        strokeWidth="2"
                                    />
                                    <path
                                        d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
                                        strokeWidth="2"
                                    />
                                </svg>
                            </button>
                            <button
                                onClick={() => onEliminar(incidencia.id)}
                                className="p-1 rounded-full cursor-pointer"
                                title="Eliminar"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6 text-gray-500"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <path
                                        d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m-8 0h8m-8 4v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V10m-6 0v10"
                                        strokeWidth="2"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
