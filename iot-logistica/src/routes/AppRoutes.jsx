import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import Gateways from '../pages/Gateways';
import Devices from '../pages/Devices';
import InsumoCriadouro from '../pages/InsumoCriadouro';
import Compra from '../pages/Compra';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/gateways" element={<Gateways />} />
        <Route path="/devices" element={<Devices />} />
        <Route path="/insumocriadouro" element={<InsumoCriadouro/>} />
        <Route path="/compra" element={<Compra />} />
      </Routes>
    </BrowserRouter>
  );
}
