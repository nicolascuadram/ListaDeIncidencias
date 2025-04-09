import { useState } from 'react';

export default function FormularioIncidencia() {

    // Estado para el formulario
    const [nuevaIncidencia, setNuevaIncidencia] = useState({
        title: '',
        type: '',
        author: ''
    });

    // Función para manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Aquí iría la lógica para guardar la incidencia en tu backend
            // Por ejemplo:
            // await fetch('/api/incidencias', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(nuevaIncidencia)
            // });

            // Simulamos una operación exitosa
            console.log('Incidencia creada:', nuevaIncidencia);

            // Limpiar formulario
            setNuevaIncidencia({ title: '', type: '', author: '' });

            // Opcional: redirigir a la lista de incidencias después de crear
            // navigate('/incidencias');

            // O mostrar un mensaje de éxito
            alert('Incidencia creada con éxito');
        } catch (error) {
            console.error('Error al crear la incidencia:', error);
            alert('Error al crear la incidencia');
        }
    };

    // Manejar cambios en los campos del formulario
    const handleInputChange = (e) => {
        setNuevaIncidencia({
            ...nuevaIncidencia,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Crear Nueva Incidencia</h1>

            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                            Título
                        </label>
                        <input
                            id="title"
                            type="text"
                            name="title"
                            value={nuevaIncidencia.title}
                            onChange={handleInputChange}
                            placeholder="Título de la incidencia"
                            className="border p-2 rounded w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                            Tipo
                        </label>
                        <input
                            id="type"
                            type="text"
                            name="type"
                            value={nuevaIncidencia.type}
                            onChange={handleInputChange}
                            placeholder="Material, Tecnología, etc."
                            className="border p-2 rounded w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">
                            Autor
                        </label>
                        <input
                            id="author"
                            type="text"
                            name="author"
                            value={nuevaIncidencia.author}
                            onChange={handleInputChange}
                            placeholder="Nombre del autor"
                            className="border p-2 rounded w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    <div className="flex space-x-4 pt-2">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition duration-200"
                        >
                            Crear Incidencia
                        </button>

                        <button
                            type="button"
                            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded transition duration-200"
                            onClick={() => navigate ? navigate('/incidencias') : window.history.back()}
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}