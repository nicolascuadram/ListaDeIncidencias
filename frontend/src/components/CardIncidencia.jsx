export default function IncidenciaCard({ incidencia }) {
    return (
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{incidencia.title}</h2>
            <div className="flex items-center justify-between">
                <div>
                    <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        {incidencia.type}
                    </span>
                </div>
                <div className="flex items-center">
                    <span className="text-gray-600 mr-3">{incidencia.author}</span>
                    <button className="p-1 rounded-full bg-gray-100">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor">
                            <circle cx="12" cy="12" r="10" strokeWidth="2" />
                            <path d="M12 8v8M8 12h8" strokeWidth="2" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}