import { API_URL } from '@root/constants';
import { objectKeysToSnakeCase } from '@root/utils/objectUtils';
import { PasswordRequest, UserRequest } from '@root/types/models';

class UserAPI {
  static prefix = `${API_URL}/user`;

  static editProfile(data: UserRequest): Promise<Response> {
    return fetch(`${UserAPI.prefix}/profile`, {
      method: 'PUT',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(objectKeysToSnakeCase(data)),
    });
  }

  static uploadAvatar(avatar: File): Promise<Response> {
    const formData = new FormData();
    formData.append('avatar', avatar);

    return fetch(`${UserAPI.prefix}/profile/avatar`, {
      method: 'PUT',
      credentials: 'include',
      headers: { 'Content-Type': avatar.type },
      body: formData,
    });
  }

  static changePassword(data: PasswordRequest): Promise<Response> {
    return fetch(`${UserAPI.prefix}/password`, {
      method: 'PUT',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(objectKeysToSnakeCase(data)),
    });
  }

  static getUser(id: string): Promise<Response> {
    return fetch(`${UserAPI.prefix}/${id}`, {
      method: 'PUT',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => response.json());
  }

  static findUsers(login: string): Promise<Response> {
    return fetch(`${UserAPI.prefix}/search`, {
      method: 'PUT',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(objectKeysToSnakeCase(login)),
    });
  }
}

export default UserAPI;
