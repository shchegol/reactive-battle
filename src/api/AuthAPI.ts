import { API_URL, API_VERSION } from '@root/constants';
import { handleResponse } from '@utils/responseHandle';
import { SignUpRequest, UserRequest } from '@api/types';

class AuthAPI {
  static prefix = `${API_URL}/api/${API_VERSION}/auth`;

  static prefixYandexOauth = `${API_URL}/api/${API_VERSION}/oauth/yandex`;

  static signup(data: SignUpRequest) {
    return fetch(`${AuthAPI.prefix}/signup`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).then(handleResponse);
  }

  static signin(data: UserRequest) {
    return fetch(`${AuthAPI.prefix}/signin`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).then(handleResponse);
  }

  static fetchUser() {
    return fetch(`${AuthAPI.prefix}/user`, {
      method: 'GET',
      credentials: 'include',
    }).then(handleResponse);
  }

  static yaGetServiceId() {
    return fetch(`${AuthAPI.prefixYandexOauth}/service-id`, {
      method: 'get',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    });
  }

  static yaLogin(code: string) {
    return fetch(AuthAPI.prefixYandexOauth, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code }),
    }).then(handleResponse);
  }

  static logout() {
    return fetch(`${AuthAPI.prefix}/logout`, {
      method: 'POST',
      credentials: 'include',
    });
  }
}

export default AuthAPI;
