import { PasswordRequest, UserRequest, UserResponse } from '@api/types';
import axios from '@utils/yandexApiRequest';

const prefix = '/user';

export const changeProfile = (data: UserRequest): Promise<UserResponse> => axios.put(`${prefix}/profile`, data);
export const changeAvatar = (avatar: File): Promise<UserResponse> => {
  const formData = new FormData();
  formData.append('avatar', avatar);

  return axios.put(`${prefix}/profile/avatar`, formData);
};
export const changePassword = (data: PasswordRequest) => axios.put(`${prefix}/password`, data);
export const getUser = (id: string) => axios.get(`${prefix}/${id}`);
export const findUser = (login: string) => axios.post(`${prefix}/search`, login);

export default {
  prefix,

  changeProfile,
  changeAvatar,
  changePassword,
  getUser,
  findUser,
};
