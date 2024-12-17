import axios from 'axios';

const api = axios.create({
  baseURL: '',
});

export default api;

// Exemplo: buscar gateways
export const getGateways = async () => {
  const response = await api.get('/gateways');
  return response.data;
};
