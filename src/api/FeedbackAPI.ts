import { Review } from '@root/store/types';
import apiAxios from '@utils/apiRequest';

export const addReview = (data: Partial<Review>): Promise<Review> => apiAxios.post('reviews', data);

export default {
  addReview,
};
