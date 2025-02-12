import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Devices() {
  // Estado para armazenar dispositivos
  const [devices, setDevices] = useState([
    { id: 1, name: 'Sensor de Temperatura', description: 'Mede a temperatura ambiente', location: 'Lat: -23.55, Long: -46.63' },
    { id: 2, name: 'Sensor de Umidade', description: 'Monitora a umidade do solo', location: 'Lat: -22.91, Long: -43.20' },
  ]);
  const navigate = useNavigate();

  // Função para excluir um dispositivo
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja excluir este dispositivo?"
    );
    if (confirmDelete) {
      setDevices(devices.filter((device) => device.id !== id));
      alert("Dispositivo excluído com sucesso!");
    }
  };

  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <div className="p-6 text-center">
        <h1 className="text-3xl font-semibold text-gray-800">Dispositivos</h1>
        <p className="text-gray-600 mt-2">Gerencie seus dispositivos cadastrados</p>
      </div>

      {/* Botão de adicionar dispositivo */}
      <div className="flex justify-end px-6">
        <button 
        onClick={() => navigate('/add-devices')}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">+ Adicionar Dispositivo</button>
      </div>

      {/* Lista de dispositivos */}
      <div className="flex flex-wrap justify-center items-start gap-6 px-6 mt-4">
        {devices.map((device) => (
          <div key={device.id} className="p-6 bg-white rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-semibold text-gray-700">{device.name}</h2>
            <p className="text-gray-600">{device.description}</p>
            <p className="text-gray-500 text-sm mt-2">Localização: {device.location}</p>
            <div className="flex justify-between mt-4">
              <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">Editar</button>
              <button onClick={() => handleDelete(device.id)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Excluir</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
