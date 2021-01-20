import { API_URL, API_VERSION } from '@root/constants';
import { UserRequest, UserResponse } from '@root/types/models';

class AuthAPI {
  static prefix = `${API_URL}/api/${API_VERSION}/auth`;

  static signup(data: Partial<UserRequest>) {
    return fetch(`${AuthAPI.prefix}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  }

  static signin(data: Partial<UserRequest>) {
    return fetch(`${AuthAPI.prefix}/signin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  }

  static fetchUser(): Promise<UserResponse> {
    return fetch(`${AuthAPI.prefix}/user`, {
      method: 'GET',
      credentials: 'include',
    }).then((response) => response.json());
  }

  static logout() {
    return fetch(`${AuthAPI.prefix}/logout`, {});
  }
}

export default AuthAPI;
