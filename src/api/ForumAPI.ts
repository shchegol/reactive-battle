import { Comment, Topic } from '@root/store/types';
import apiAxios from '@utils/apiRequest';

const topicsPrefix = '/topics';
const commentsPrefix = '/comments';

export const fetchTopics = (): Promise<Topic[]> => apiAxios.get(`${topicsPrefix}`);
export const addTopic = (name: string, description: string, login: string): Promise<Topic> => apiAxios.post(`${topicsPrefix}`, { name, description, login });
export const fetchTopic = (topic_id: number): Promise<Topic> => apiAxios.get(`${topicsPrefix}/${topic_id}`);
export const addComment = (topic_id: number, body: string, login: string, comment_id: number | null): Promise<Comment> => apiAxios.post(`${commentsPrefix}`, {
  topic_id, body, login, comment_id,
});

export default {
  topicsPrefix,
  commentsPrefix,

  fetchTopics,
  addTopic,
  fetchTopic,
  addComment,
};
