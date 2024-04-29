import axios from 'axios';

export const instance = axios.create({
  baseURL: import.meta.env.BASE_URL,
  headers: {
    Authorization: `Beerer ${localStorage.getItem('')}`,
  },
});
