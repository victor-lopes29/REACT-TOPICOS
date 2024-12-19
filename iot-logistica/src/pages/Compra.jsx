import { useState } from "react";
import Navbar from '../components/Navbar';

const Compra = () => {
  const [formData, setFormData] = useState({
    insumoId: "",
    fornecedor: "",
    valor: "",
    descricaoCompra: "",
    quantidadeCompra: "",
    dataCompra: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados enviados:", formData);
    alert("Compra registrada com sucesso!");
    setFormData({
      insumoId: "",
      fornecedor: "",
      valor: "",
      descricaoCompra: "",
      quantidadeCompra: "",
      dataCompra: "",
    });
  };

  return (
    <div className="w-full h-screen">
    <Navbar />
    <div className="container mx-auto mt-10 p-5 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-5 text-black text-left">Registrar Compra de Insumos</h2>
      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        <div>
          <label className="block font-semibold text-black">ID do Insumo</label>
          <input
            type="number"
            name="insumoId"
            value={formData.insumoId}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md bg-white text-black"
          />
        </div>

        <div>
          <label className="block font-semibold text-black">Fornecedor</label>
          <input
            type="text"
            name="fornecedor"
            value={formData.fornecedor}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md bg-white text-black"
          />
        </div>

        <div>
          <label className="block font-semibold text-black">Valor (R$)</label>
          <input
            type="number"
            name="valor"
            value={formData.valor}
            onChange={handleChange}
            required
            step="0.01"
            className="w-full p-2 border rounded-md bg-white text-black"
          />
        </div>

        <div>
          <label className="block font-semibold text-black">Descrição da Compra</label>
          <textarea
            name="descricaoCompra"
            value={formData.descricaoCompra}
            onChange={handleChange}
            required
            rows="3"
            className="w-full p-2 border rounded-md bg-white text-black"
          ></textarea>
        </div>

        <div>
          <label className="block font-semibold text-black">Quantidade</label>
          <input
            type="number"
            name="quantidadeCompra"
            value={formData.quantidadeCompra}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md bg-white text-black"
          />
        </div>

        <div>
          <label className="block font-semibold text-black">Data da Compra</label>
          <input
            type="date"
            name="dataCompra"
            value={formData.dataCompra}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md bg-white text-black"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
        >
          Registrar Compra
        </button>
      </form>
    </div>
    </div>
  );
};

export default Compra;
