import { push } from 'connected-react-router';

export function handleResponse(response: Response) {
  return response
    .text()
    .then((text: any) => {
      if (response.ok) {
        return text;
      }

      const data = text && JSON.parse(text);

      // Unauthorized
      if (response.status === 401) {
        localStorage.setItem('userLogin', '');
        push('/signin');
      }

      // Unexpected error
      if (response.status === 500) {
        push('/error-5xx');
      }

      const error = (data && data.reason) || response.statusText;

      return Promise.reject(error);
    });
}
