import { API_URL, API_VERSION } from '@root/constants';
import { SignUpRequest, UserRequest } from '@root/types/models';
import { handleResponse } from '@root/utils/responseHandle';

class AuthAPI {
  static prefix = `${API_URL}/api/${API_VERSION}/auth`;

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
    });
  }

  static logout() {
    return fetch(`${AuthAPI.prefix}/logout`, {
      method: 'POST',
      credentials: 'include',
    });
  }
}

export default AuthAPI;
