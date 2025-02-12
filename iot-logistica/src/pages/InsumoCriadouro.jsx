import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Supplies() {
  // Dados fictícios para simulação do estoque
  const [supplies] = useState([
    { id: 1, name: "Ração para Gado", quantity: 500, unit: "kg" },
    { id: 2, name: "Suplemento Mineral", quantity: 200, unit: "kg" },
    { id: 3, name: "Vacinas", quantity: 50, unit: "doses" },
    { id: 4, name: "Antibióticos", quantity: 30, unit: "frascos" },
  ]);

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <Navbar />
      <div className="flex-grow p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Estoque de Insumos</h1>
        <div className="bg-white shadow-md rounded-lg p-4 overflow-x-auto">
          {supplies.length > 0 ? (
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200 text-gray-700">
                  <th className="p-3 text-left">Nome</th>
                  <th className="p-3 text-left">Quantidade</th>
                  <th className="p-3 text-left">Unidade</th>
                </tr>
              </thead>
              <tbody>
                {supplies.map((supply) => (
                  <tr key={supply.id} className="border-t hover:bg-gray-100">
                    <td className="p-3 text-left text-black">{supply.name}</td>
                    <td className="p-3 text-left text-black">{supply.quantity}</td>
                    <td className="p-3 text-left text-black">{supply.unit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-500 text-center">Nenhum insumo disponível no estoque.</p>
          )}
        </div>
      </div>
    </div>
  );
}
