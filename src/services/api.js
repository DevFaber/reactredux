import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;
// não comitei com o json server instalado
