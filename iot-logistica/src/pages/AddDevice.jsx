import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function AddDevice() {
  const [device, setDevice] = useState({
    name: "",
    description: "",
    latitude: "",
    longitude: "",
  });


  const handleChange = (e) => {
    setDevice({ ...device, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dispositivo cadastrado:", device);
    // Aqui você pode adicionar a lógica para enviar os dados para o backend
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <Navbar />
      <div className="flex-grow flex justify-center items-center">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Adicionar Dispositivo
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Nome"
              value={device.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
              required
            />
            <input
              type="text"
              name="description"
              placeholder="Descrição"
              value={device.description}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
              required
            />
            <input
              type="text"
              name="latitude"
              placeholder="Latitude"
              value={device.latitude}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
              required
            />
            <input
              type="text"
              name="longitude"
              placeholder="Longitude"
              value={device.longitude}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
            >
              Cadastrar
            </button>
          </form>
          <div className="mt-4 text-center">
          <Link to="/devices" className="text-blue-500 hover:underline">Voltar para Dispositivos</Link>
        </div>
        </div>
      </div>
    </div>
  );
}
