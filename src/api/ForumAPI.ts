import { Topic } from '@root/store/types';
import apiAxios from '@root/utils/apiRequest';

class ForumAPI {
  static prefix = '/topics';

  static fetchTopics(): Promise<Topic[]> {
    return apiAxios.get(`${ForumAPI.prefix}`);
  }

  static addTopic(name: string, description: string, login: string): Promise<Topic> {
    return apiAxios.post(`${ForumAPI.prefix}`, { name, description, login });
  }

  // static changeProfile(data: UserRequest): Promise<UserResponse> {
  //   return axios.put(`${UserAPI.prefix}/profile`, data);
  // }

  // static changeAvatar(avatar: File): Promise<UserResponse> {
  //   const formData = new FormData();
  //   formData.append('avatar', avatar);

  //   return axios.put(`${UserAPI.prefix}/profile/avatar`, formData);
  // }

  // static changePassword(data: PasswordRequest) {
  //   return axios.put(`${UserAPI.prefix}/password`, data);
  // }

  // static getUser(id: string) {
  //   return axios.get(`${UserAPI.prefix}/${id}`);
  // }

  // static findUser(login: string) {
  //   return axios.post(`${UserAPI.prefix}/search`, login);
  // }
}

export default ForumAPI;
