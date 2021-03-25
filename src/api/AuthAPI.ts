import {
  SignUpRequest,
  UserRequest,
  UserResponse,
  YaServiceResponse,
} from '@api/types';
import axios from '@utils/apiRequest';

const prefix = '/auth';
const prefixYandexOauth = '/oauth/yandex';

export const signup = (data: SignUpRequest): Promise<UserResponse> => axios.post(`${prefix}/signup`, data);
export const signin = (data: UserRequest): Promise<UserResponse> => axios.post(`${prefix}/signin`, data);
export const fetchUser = (): Promise<UserResponse> => axios.get(`${prefix}/user`);
export const yaGetServiceId = (): Promise<YaServiceResponse> => axios.get(`${prefixYandexOauth}/service-id`);
export const yaLogin = (code: string): Promise<UserResponse> => axios.post(prefixYandexOauth, { code });
export const logout = () => axios.post(`${prefix}/logout`);

export default {
  prefix,
  prefixYandexOauth,

  signup,
  signin,
  fetchUser,
  yaGetServiceId,
  yaLogin,
  logout,
};
