import { Review } from '@root/store/types';
import apiAxios from '@root/utils/apiRequest';

export default class FeedbackAPI {
  static addReview(data: Partial<Review>): Promise<Review> {
    return apiAxios.post('reviews', data);
  }
}
