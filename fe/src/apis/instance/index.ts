import axios from 'axios';

const instance = ({
  contentType,
}: {
  contentType: 'application/json' | 'multipart/form-data' | 'text/event-stream';
}) => {
  return axios.create({
    baseURL: import.meta.env.VITE_END_POINT,
    headers: {
      'Content-Type': contentType,
      // Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
    },
  });
};

export const instanceOfJson = instance({ contentType: 'application/json' });
export const instanceOfFormData = instance({ contentType: 'multipart/form-data' });
export const instanceOfEventStream = instance({ contentType: 'text/event-stream' });

instanceOfJson.interceptors.request.use(function (config) {
  // Do something before request is sent
  let token = localStorage.getItem('token');
  config.headers['Authorization'] = 'Bearer ' + token;
  return config;
});

instanceOfFormData.interceptors.request.use(function (config) {
  // Do something before request is sent
  let token = localStorage.getItem('token');
  config.headers['Authorization'] = 'Bearer ' + token;
  return config;
});

instanceOfEventStream.interceptors.request.use(function (config) {
  // Do something before request is sent
  let token = localStorage.getItem('token');
  config.headers['Authorization'] = 'Bearer ' + token;
  return config;
});
