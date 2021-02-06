import { API_URL, API_VERSION } from '@root/constants';
import { PasswordRequest, UserRequest } from '@api/types';
import { handleResponse } from '@utils/responseHandle';

class UserAPI {
  static prefix = `${API_URL}/api/${API_VERSION}/user`;

  static changeProfile(data: UserRequest) {
    return fetch(`${UserAPI.prefix}/profile`, {
      method: 'PUT',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(handleResponse);
  }

  static changeAvatar(avatar: File) {
    const formData = new FormData();
    formData.append('avatar', avatar);

    return fetch(`${UserAPI.prefix}/profile/avatar`, {
      method: 'PUT',
      credentials: 'include',
      body: formData,
    })
      .then(handleResponse);
  }

  static changePassword(data: PasswordRequest) {
    return fetch(`${UserAPI.prefix}/password`, {
      method: 'PUT',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(handleResponse);
  }

  static getUser(id: string) {
    return fetch(`${UserAPI.prefix}/${id}`, {
      method: 'PUT',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json());
  }

  static findUser(login: string) {
    return fetch(`${UserAPI.prefix}/search`, {
      method: 'PUT',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(login),
    });
  }
}

export default UserAPI;
