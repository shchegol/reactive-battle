import { Comment, Topic } from '@root/store/types';
import apiAxios from '@root/utils/apiRequest';

class ForumAPI {
  static topicsPrefix = '/topics';

  static commentsPrefix = '/comments';

  static fetchTopics(): Promise<Topic[]> {
    return apiAxios.get(`${ForumAPI.topicsPrefix}`);
  }

  static addTopic(name: string, description: string, login: string): Promise<Topic> {
    return apiAxios.post(`${ForumAPI.topicsPrefix}`, { name, description, login });
  }

  static fetchTopic(topicId: number): Promise<Topic> {
    return apiAxios.get(`${ForumAPI.topicsPrefix}/${topicId}`);
  }

  static addComment(topicId: number, body: string, login: string, commentId: number | null): Promise<Comment> {
    return apiAxios.post(`${ForumAPI.commentsPrefix}`, {
      topicId, body, login, commentId,
    });
  }
}

export default ForumAPI;
