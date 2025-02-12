import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import Gateways from '../pages/Gateways';
import AddGateway from '../pages/AddGateway';
import Devices from '../pages/Devices';
import InsumoCriadouro from '../pages/InsumoCriadouro';
import Compra from '../pages/Compra';
import AddDevices from '../pages/AddDevice';
import Readings from '../pages/Readings';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/gateways" element={<Gateways />} />
        <Route path="/add-gateway" element={<AddGateway />} />
        <Route path="/devices" element={<Devices />} />
        <Route path="/insumocriadouro" element={<InsumoCriadouro/>} />
        <Route path="/compra" element={<Compra />} />
        <Route path="/add-devices" element={<AddDevices/>} />
        <Route path="/readings" element={<Readings />} />
      </Routes>
    </BrowserRouter>
  );
}
