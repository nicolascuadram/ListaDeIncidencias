import CardIncidencia from './CardIncidencia';

export default function IncidenciasList() {

    const incidencias = [
        { id: 1, title: 'No hay proyector en la sala 104', type: 'Material', author: 'Javier Gamboa' },
        { id: 2, title: 'No hay proyector en la sala 104', type: 'Material', author: 'Javier Gamboa' },
        { id: 3, title: 'No hay proyector en la sala 104', type: 'Material', author: 'Javier Gamboa' },
        { id: 4, title: 'No hay proyector en la sala 104', type: 'Material', author: 'Javier Gamboa' },
    ];

    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Lista de Incidencias</h1>
            <div className="space-y-4">
                {incidencias.map((incidencia) => (
                    <CardIncidencia key={incidencia.id} incidencia={incidencia} />
                ))}
            </div>
        </div>
    );
}