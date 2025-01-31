import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!form.email || !form.password) {
      setError('Preencha todos os campos!');
      return;
    }

    setError('');
    navigate('/dashboard'); // Simula login bem-sucedido
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-black">Login</h2>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <input
          type="email"
          placeholder="E-mail"
          className="w-full mb-4 p-2 border border-gray-300 bg-white text-black rounded"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Senha"
          className="w-full mb-4 p-2 border border-gray-300 bg-white text-black rounded"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
          disabled={!form.email || !form.password}
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
