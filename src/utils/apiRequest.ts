import axios from 'axios';
import { API_URL } from '@root/constants';
// import Cookies from 'js-cookie';
import { push } from 'connected-react-router';

const yandexAxios = axios.create({
  baseURL: `${API_URL}`,
  withCredentials: true,
});

yandexAxios.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error?.response) {
      // Unauthorized
      if (error.response.status === 401) {
        // Cookies.remove('userLogin');
        push('/signin');
      }

      // Unexpected error
      if (error.response.status === 500) {
        push('/error-5xx');
      }

      return Promise.reject(error.response.data.reason);
    }

    if (error?.request) {
      return Promise.reject(error.request.response.reason);
    }

    return Promise.reject(error);
  },
);

export default yandexAxios;

// const apiAxios = axios.create({
//   baseURL: `${API_URL}`,
//   withCredentials: true,
// });
//
// apiAxios.interceptors.response.use(
//   (response) => response.data,
//   (error) => {
//     if (error?.response) {
//       return Promise.reject(error.response.data.reason);
//     }
//
//     if (error?.request) {
//       return Promise.reject(error.request.response.reason);
//     }
//
//     return Promise.reject(error);
//   },
// );
//
// export default apiAxios;
