import Navbar from '../components/Navbar';

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p>Aqui você pode exibir:</p>
        <ul className="list-disc ml-6">
          <li>Mapa com a localização dos dispositivos.</li>
          <li>Gráficos das últimas medições.</li>
        </ul>
      </div>
    </div>
  );
}
