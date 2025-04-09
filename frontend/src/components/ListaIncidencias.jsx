import { useState } from 'react';
import CardIncidencia from './CardIncidencia';
import incidenciasData from '../data/incidencias.json'; // Ajusta la ruta según donde guardes el JSON

export default function ListaIncidencias() {
    // Estado para manejar las incidencias
    const [incidencias, setIncidencias] = useState(incidenciasData);

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

    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Lista de Incidencias</h1>

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