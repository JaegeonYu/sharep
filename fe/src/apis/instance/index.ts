import axios from 'axios';

export const instance = axios.create({
  baseURL: import.meta.env.VITE_END_POINT,

  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
    // Origin: 'http://localhost:5173',
  },
});
