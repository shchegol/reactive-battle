import { SignUpRequest, UserRequest, UserResponse } from '@api/types';
import axios from '@utils/apiRequest';

class AuthAPI {
  static prefix = '/auth';

  static prefixYandexOauth = '/oauth/yandex';

  static signup(data: SignUpRequest): Promise<UserResponse> {
    return axios.post(`${AuthAPI.prefix}/signup`, data);
  }

  static signin(data: UserRequest): Promise<UserResponse> {
    return axios.post(`${AuthAPI.prefix}/signin`, data);
  }

  static fetchUser(): Promise<UserResponse> {
    return axios.get(`${AuthAPI.prefix}/user`);
  }

  static yaGetServiceId(): Promise<{ service_id: string }> {
    return axios.get(`${AuthAPI.prefixYandexOauth}/service-id`);
  }

  static yaLogin(code: string): Promise<UserResponse> {
    return axios.post(AuthAPI.prefixYandexOauth, { code });
  }

  static logout() {
    return axios.post(`${AuthAPI.prefix}/logout`);
  }
}

export default AuthAPI;
