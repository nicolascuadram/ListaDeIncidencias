import { useState } from 'react';
import CardIncidencia from './CardIncidencia';
import incidenciasData from '../data/incidencias.json'; // Ajusta la ruta según donde guardes el JSON

export default function IncidenciasList() {
    // Estado para manejar las incidencias
    const [incidencias, setIncidencias] = useState(incidenciasData);
    const [nuevaIncidencia, setNuevaIncidencia] = useState({ title: '', type: '', author: '' });

    // Función para crear una nueva incidencia
    const handleCrearIncidencia = (e) => {
        e.preventDefault();
        const nueva = {
            id: incidencias.length + 1, // ID simple basado en longitud (en producción usar UUID o similar)
            title: nuevaIncidencia.title,
            type: nuevaIncidencia.type,
            author: nuevaIncidencia.author,
        };
        setIncidencias([...incidencias, nueva]);
        setNuevaIncidencia({ title: '', type: '', author: '' }); // Limpiar formulario
    };

    // Función para eliminar una incidencia
    const handleEliminarIncidencia = (id) => {
        setIncidencias(incidencias.filter((incidencia) => incidencia.id !== id));
    };

    // Función para modificar una incidencia
    const handleModificarIncidencia = (id, datosActualizados) => {
        setIncidencias(
            incidencias.map((incidencia) =>
                incidencia.id === id ? { ...incidencia, ...datosActualizados } : incidencia
            )
        );
    };

    // Manejar cambios en el formulario
    const handleInputChange = (e) => {
        setNuevaIncidencia({ ...nuevaIncidencia, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Lista de Incidencias</h1>

            {/* Formulario para crear nueva incidencia */}
            <form onSubmit={handleCrearIncidencia} className="mb-6 space-y-2">
                <input
                    type="text"
                    name="title"
                    value={nuevaIncidencia.title}
                    onChange={handleInputChange}
                    placeholder="Título de la incidencia"
                    className="border p-2 rounded w-full"
                    required
                />
                <input
                    type="text"
                    name="type"
                    value={nuevaIncidencia.type}
                    onChange={handleInputChange}
                    placeholder="Tipo (Material, Tecnología, etc.)"
                    className="border p-2 rounded w-full"
                    required
                />
                <input
                    type="text"
                    name="author"
                    value={nuevaIncidencia.author}
                    onChange={handleInputChange}
                    placeholder="Autor"
                    className="border p-2 rounded w-full"
                    required
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    Crear Incidencia
                </button>
            </form>

            {/* Lista de incidencias */}
            <div className="space-y-4">
                {incidencias.map((incidencia) => (
                    <CardIncidencia
                        key={incidencia.id}
                        incidencia={incidencia}
                        onEliminar={handleEliminarIncidencia}
                        onModificar={handleModificarIncidencia}
                    />
                ))}
            </div>
        </div>
    );
}
