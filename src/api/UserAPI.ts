import { API_URL, API_VERSION } from '@root/constants';
import { PasswordRequest, UserRequest, UserResponse } from '@root/types/models';

class UserAPI {
  static prefix = `${API_URL}/api/${API_VERSION}/user`;

  static editProfile(data: UserRequest): Promise<Response> {
    return fetch(`${UserAPI.prefix}/profile`, {
      method: 'PUT',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  }

  static async uploadAvatar(avatar: File): Promise<Partial<UserResponse>> {
    const formData = new FormData();
    formData.append('avatar', avatar);

    return fetch(`${UserAPI.prefix}/profile/avatar`, {
      method: 'PUT',
      credentials: 'include',
      body: formData,
    }).then((response) => response.json());
  }

  static changePassword(data: PasswordRequest): Promise<Response> {
    return fetch(`${UserAPI.prefix}/password`, {
      method: 'PUT',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
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
      body: JSON.stringify(login),
    });
  }
}

export default UserAPI;
