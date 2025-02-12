import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <ul className="flex justify-between">
        <li>
          <Link to="/" className="font-bold hover:text-blue-400">Dashboard</Link>
        </li>
        <li>
          <Link to="/gateways" className="font-bold hover:text-blue-400">Gateways</Link>
        </li>
        <li>
          <Link to="/devices" className="font-bold hover:text-blue-400">Dispositivos</Link>
        </li>
        <li>
          <Link to="/insumocriadouro" className="font-bold hover:text-blue-400">Insumos</Link>
        </li>
        <li>
          <Link to="/readings" className="font-bold hover:text-blue-400">Leituras</Link>
        </li>
        <li>
          <Link to="/compra" className="font-bold hover:text-blue-400">Compra</Link>
        </li>
        <li>
          <Link to="/login">Sair</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
