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

  static fetchTopic(topic_id: number): Promise<Topic> {
    return apiAxios.get(`${ForumAPI.topicsPrefix}/${topic_id}`);
  }

  static addComment(topic_id: number, body: string, login: string, comment_id: number | null): Promise<Comment> {
    return apiAxios.post(`${ForumAPI.commentsPrefix}`, {
      topic_id, body, login, comment_id,
    });
  }
}

export default ForumAPI;
