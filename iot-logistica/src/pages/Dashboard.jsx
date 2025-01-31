import Navbar from '../components/Navbar';
import LineChart from "../components/LineChart";
import BarChart from "../components/BarChart";

export default function Dashboard() {
  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <div className="p-6 text-center">
        <h1 className="text-3xl font-semibold text-gray-800">Dashboard</h1>
        <p className="text-gray-600 mt-2">Controle dos insumos do gado</p>
      </div>
      <div className="flex flex-wrap justify-center items-start gap-6 px-6 mt-4">
        <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Consumo de insumos por mês</h2>
          <LineChart />
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Consumo de insumos por gado (kg)</h2>
          <BarChart />
        </div>
      </div>
    </div>
  );
}
