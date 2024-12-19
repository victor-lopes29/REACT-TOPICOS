import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <ul className="flex justify-between">
        <li>
          <Link to="/" className="font-bold">Dashboard</Link>
        </li>
        <li>
          <Link to="/gateways">Gateways</Link>
        </li>
        <li>
          <Link to="/devices">Dispositivos</Link>
        </li>
        <li>
          <Link to="/insumocriadouro">Insumos</Link>
        </li>
        <li>
          <Link to="/login">Sair</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
