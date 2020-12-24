import { API_URL } from '@root/constants';
import { objectKeysToSnakeCase } from '@root/utils/objectUtils';

export type AuthFields = {
  firstName?: string,
  secondName?: string,
  login: string,
  email?: string,
  password: string,
  phone?: string
};

class AuthAPI {
  static prefix = `${API_URL}/auth`;

  static request() {
    return fetch(`${AuthAPI.prefix}/user`, {}).then((response) => response.json());
  }

  static signup(data: Partial<AuthFields>) {
    return fetch(`${AuthAPI.prefix}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(objectKeysToSnakeCase(data)),
    });
  }

  static signin(data: Partial<AuthFields>) {
    return fetch(`${AuthAPI.prefix}/signin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(objectKeysToSnakeCase(data)),
    });
  }

  static logout() {
    return fetch(`${AuthAPI.prefix}/logout`, {});
  }
}

export default AuthAPI;
