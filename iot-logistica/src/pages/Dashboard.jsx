import Navbar from '../components/Navbar';
import LineChart from "../components/LineChart";
import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart";

export default function Dashboard() {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p>Aqui você pode exibir:</p>
        <ul className="list-disc ml-6">
          <li>Mapa com a localização dos dispositivos.</li>
          <li>Gráficos das últimas medições.</li>
        </ul>
      </div>
      <div className="w-full h-auto flex justify-center items-start gap-4 mt-8">
        <div className="flex-1 p-4 bg-white rounded-lg shadow-lg max-w-md">
          <h2 className="text-xl font-semibold mb-4 text-black">Consumo de insumos por mês</h2>
          <LineChart />
        </div>
        <div className="flex-1 p-4 bg-white rounded-lg shadow-lg max-w-md">
          <h2 className="text-xl font-semibold mb-4 text-black">Consumo de insumos por gado (kg)</h2>
          <BarChart />
        </div>
        {/*<div className="bg-white shadow rounded p-4">
          <h2 className="text-xl font-semibold mb-4 text-black">Gráfico de Pizza</h2>
          <PieChart />
        </div>*/}
      </div>
    </div>
  );
}
