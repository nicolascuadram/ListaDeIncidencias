import CardIncidencia from './CardIncidencia';

export default function IncidenciasList() {

    const incidencias = [
        { id: 2, title: 'Hay un perro en la sala S-2', type: 'Animal', author: 'Rafael Gonzalez' },
        { id: 3, title: 'No hay luz en la sala 104', type: 'Material', author: 'Nicolas Cuadra' },
        { id: 4, title: 'No hay sillas en la sala 102', type: 'Material', author: 'Vejat Olea' },
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