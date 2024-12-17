import { useEffect, useState } from 'react';
import { getGateways } from '../services/api';
import Navbar from '../components/Navbar';

export default function Gateways() {
  const [gateways, setGateways] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getGateways();
      setGateways(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Gateways</h1>
        <ul>
          {gateways.map((gateway) => (
            <li key={gateway.id} className="p-2 border-b">
              {gateway.name} - {gateway.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
