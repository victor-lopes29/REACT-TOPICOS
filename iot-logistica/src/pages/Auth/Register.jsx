import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  // Função para capturar mudanças nos inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Dados enviados:', formData);

    // Adicione lógica aqui para enviar os dados para a API
    // Exemplo:
    // try {
    //   const response = await fetch('/api/register', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData),
    //   });
    //   if (response.ok) {
    //     alert('Cadastro realizado com sucesso!');
    //     navigate('/login'); // Redireciona para a página de login
    //   } else {
    //     alert('Erro ao cadastrar');
    //   }
    // } catch (error) {
    //   console.error('Erro:', error);
    // }

    // Por enquanto, simula um registro bem-sucedido
    alert('Cadastro realizado com sucesso!');
    navigate('/login');
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Cadastro</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-gray-600" htmlFor="username">
              Nome de Usuário
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite seu nome de usuário"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-600" htmlFor="email">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite seu e-mail"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-gray-600" htmlFor="password">
              Senha
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite sua senha"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
          >
            Cadastrar
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Já possui uma conta?{' '}
          <a href="/login" className="text-blue-500 hover:underline">
            Faça login
          </a>
        </p>
      </div>
    </div>
  );
}
