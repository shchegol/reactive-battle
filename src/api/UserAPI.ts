import axios from 'axios';
import { API_URL, API_VERSION } from '@root/constants';
import { PasswordRequest, UserRequest } from '@api/types';
import { handleResponse } from '@utils/responseHandle';

class UserAPI {
  static prefix = `${API_URL}/api/${API_VERSION}/user`;

  static changeProfile(data: UserRequest) {
    return axios.put(`${UserAPI.prefix}/profile`, JSON.stringify(data), {
      withCredentials: true,
      headers: { 'Content-Type': 'application/json' },
    }).then(handleResponse);
  }

  static changeAvatar(avatar: File) {
    const formData = new FormData();
    formData.append('avatar', avatar);

    return axios.put(`${UserAPI.prefix}/profile/avatar`, formData, {
      withCredentials: true,
    }).then(handleResponse);
  }

  static changePassword(data: PasswordRequest) {
    return axios.put(`${UserAPI.prefix}/password`, JSON.stringify(data), {
      withCredentials: true,
      headers: { 'Content-Type': 'application/json' },
    }).then(handleResponse);
  }

  static getUser(id: string) {
    return axios.put(`${UserAPI.prefix}/${id}`, {
      withCredentials: true,
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => response.data);
  }

  static findUser(login: string) {
    return axios.put(`${UserAPI.prefix}/search`, JSON.stringify(login), {
      withCredentials: true,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export default UserAPI;
