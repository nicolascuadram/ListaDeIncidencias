import Sidebar from "../components/Sidebar.jsx";
import ListaIncidencias from "../components/ListaIncidencias.jsx";

export default function Layout() {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <main className="flex-1 overflow-y-auto p-6">
                <ListaIncidencias />
            </main>
        </div>
    );
}