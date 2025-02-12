import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Readings() {
  // Dados fictícios para simulação
  const [readings] = useState([
    { id: 1, date: "2025-01-31", device: "Sensor A", type: "Temperatura", value: "23°C" },
    { id: 2, date: "2025-01-31", device: "Sensor B", type: "Umidade", value: "60%" },
    { id: 3, date: "2025-01-31", device: "Sensor C", type: "Pressão", value: "1013 hPa" },
  ]);

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <Navbar />
      <div className="flex-grow p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Registros de Leitura</h1>
        <div className="bg-white shadow-md rounded-lg p-4 overflow-x-auto">
          {readings.length > 0 ? (
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200 text-gray-700">
                  <th className="p-3 text-left">Data</th>
                  <th className="p-3 text-left">Dispositivo</th>
                  <th className="p-3 text-left">Tipo de Sensor</th>
                  <th className="p-3 text-left">Valor</th>
                </tr>
              </thead>
              <tbody>
                {readings.map((reading) => (
                  <tr key={reading.id} className="border-t hover:bg-gray-100">
                    <td className="p-3 text-left text-black">{reading.date}</td>
                    <td className="p-3 text-left text-black">{reading.device}</td>
                    <td className="p-3 text-left text-black">{reading.type}</td>
                    <td className="p-3 text-left text-black font-semibold">{reading.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-500 text-center">Nenhum registro disponível.</p>
          )}
        </div>
      </div>
    </div>
  );
}
