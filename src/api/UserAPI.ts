import { PasswordRequest, UserRequest, UserResponse } from '@api/types';
import axios from '@utils/apiRequest';

class UserAPI {
  static prefix = '/user';

  static changeProfile(data: UserRequest): Promise<UserResponse> {
    return axios.put(`${UserAPI.prefix}/profile`, data);
  }

  static changeAvatar(avatar: File): Promise<UserResponse> {
    const formData = new FormData();
    formData.append('avatar', avatar);

    return axios.put(`${UserAPI.prefix}/profile/avatar`, formData);
  }

  static changePassword(data: PasswordRequest) {
    return axios.put(`${UserAPI.prefix}/password`, data);
  }

  static getUser(id: string) {
    return axios.get(`${UserAPI.prefix}/${id}`);
  }

  static findUser(login: string) {
    return axios.post(`${UserAPI.prefix}/search`, login);
  }
}

export default UserAPI;
