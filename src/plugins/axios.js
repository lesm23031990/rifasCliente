import axios from 'axios';

// Obtener la URL base de la API desde las variables de entorno
const apiUrl = process.env.VUE_APP_API_URL || 'http://127.0.0.1:8000/api/';

// Configuración base de axios
const axiosInstance = axios.create({
  baseURL: apiUrl,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Interceptor para manejar errores globalmente
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    console.error('Error en la petición:', error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
