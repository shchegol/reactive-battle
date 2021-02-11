import { API_URL, API_VERSION } from '@root/constants';
import { handleResponse } from '@utils/responseHandle';
import { SignUpRequest, UserRequest } from '@api/types';
import axios from 'axios';

class AuthAPI {
  static prefix = `${API_URL}/api/${API_VERSION}/auth`;

  static prefixYandexOauth = `${API_URL}/api/${API_VERSION}/oauth/yandex`;

  static signup(data: SignUpRequest) {
    return axios.post(`${AuthAPI.prefix}/signup`, JSON.stringify(data), {
      withCredentials: true,
      headers: { 'Content-Type': 'application/json' },
    }).then(handleResponse);
  }

  static signin(data: UserRequest) {
    return axios.post(`${AuthAPI.prefix}/signin`, JSON.stringify(data), {
      withCredentials: true,
      headers: { 'Content-Type': 'application/json' },
    }).then(handleResponse);
  }

  static fetchUser() {
    return axios.get(`${AuthAPI.prefix}/user`, {
      withCredentials: true,
    }).then(handleResponse);
  }

  static yaGetServiceId() {
    return axios.get(`${AuthAPI.prefixYandexOauth}/service-id`, {
      withCredentials: true,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  static yaLogin(code: string) {
    return axios.post(AuthAPI.prefixYandexOauth, JSON.stringify({ code }), {
      withCredentials: true,
      headers: { 'Content-Type': 'application/json' },
    }).then(handleResponse);
  }

  static logout() {
    return axios.post(`${AuthAPI.prefix}/logout`, {
      withCredentials: true,
    });
  }
}

export default AuthAPI;
