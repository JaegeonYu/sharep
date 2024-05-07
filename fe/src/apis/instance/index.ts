import axios from 'axios';

const instance = ({ contentType }: { contentType: 'application/json' | 'multipart/form-data' }) => {
  return axios.create({
    baseURL: import.meta.env.VITE_END_POINT,

    headers: {
      'Content-Type': contentType,
      Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
    },
  });
};

export const instanceOfJson = instance({ contentType: 'application/json' });
export const instanceOfFormData = instance({ contentType: 'multipart/form-data' });
