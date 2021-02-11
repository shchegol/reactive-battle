import { push } from 'connected-react-router';
import { AxiosResponse } from 'axios';
import Cookies from 'js-cookie';

export function handleResponse(response: AxiosResponse) {
  const { data } = response;
  if (response.status === 200) {
    return data;
  }

  // Unauthorized
  if (response.status === 401) {
    Cookies.remove('userLogin');
    push('/signin');
  }

  // Unexpected error
  if (response.status === 500) {
    push('/error-5xx');
  }

  const error = (data && data.reason) || response.statusText;

  return Promise.reject(error);
}
