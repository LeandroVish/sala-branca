// src/services/api.js

import axios from 'axios';

const api = axios.create({
  // A baseURL deve apontar para o seu backend Django + DRF
  baseURL: 'http://127.0.0.1:8000/api/auth/'
});

// Interceptor para adicionar automaticamente o token nas requisições
api.interceptors.request.use(config => {
  const token = localStorage.getItem('access');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
