import { Comment, Topic } from '@root/store/types';
import apiAxios from '@utils/apiRequest';

const topicsPrefix = '/topics';
const commentsPrefix = '/comments';

export const fetchTopics = (): Promise<Topic[]> => apiAxios.get(`${topicsPrefix}`);
export const addTopic = (name: string, description: string): Promise<Topic> => apiAxios.post(`${topicsPrefix}`, { name, description });
export const fetchTopic = (topicId: number): Promise<Topic> => apiAxios.get(`${topicsPrefix}/${topicId}`);
export const addComment = (topicId: number, body: string, commentId: number | null): Promise<Comment> => apiAxios.post(`${commentsPrefix}`, {
  topicId, body, commentId,
});

export default {
  topicsPrefix,
  commentsPrefix,

  fetchTopics,
  addTopic,
  fetchTopic,
  addComment,
};
