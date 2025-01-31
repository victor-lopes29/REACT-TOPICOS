import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Gateways() {
  const navigate = useNavigate();

  // Dados fictícios para teste
  const [gateways, setGateways] = useState([
    { id: 1, name: "Gateway 1", description: "Descrição do Gateway 1" },
    { id: 2, name: "Gateway 2", description: "Descrição do Gateway 2" },
  ]);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja excluir este gateway?"
    );
    if (confirmDelete) {
      setGateways(gateways.filter((gateway) => gateway.id !== id));
      alert("Gateway excluído com sucesso!");
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <Navbar />
      <div className="flex-grow p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Gateways</h1>
          <button
            onClick={() => navigate("/add-gateway")}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Adicionar Gateway
          </button>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          {gateways.length > 0 ? (
            <ul className="space-y-4">
              {gateways.map((gateway) => (
                <li
                  key={gateway.id}
                  className="flex justify-between items-center p-3 border-b"
                >
                  <div>
                    <p className="text-lg font-semibold text-gray-700">
                      {gateway.name}
                    </p>
                    <p className="text-gray-500">{gateway.description}</p>
                  </div>
                  <button
                    onClick={() => handleDelete(gateway.id)}
                    className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition"
                  >
                    Excluir
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 text-center">Nenhum gateway cadastrado.</p>
          )}
        </div>
      </div>
    </div>
  );
}
