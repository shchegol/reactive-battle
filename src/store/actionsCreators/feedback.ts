import { Review } from '@store/types';
import { Dispatch } from 'react';
import { FeedbackAction } from '@store/actions/types';
import FeedbackAPI from '@api/FeedbackAPI';
import { FeedbackActions } from '@store/actions/feedback';

export const addReview = (
  data: Partial<Review>,
) => {
  const request = () => ({ type: FeedbackActions.ADD_REVIEW_REQUEST });
  const success = (review: Review) => ({ type: FeedbackActions.ADD_REVIEW_SUCCESS, payload: { review } });
  const failure = (error: string) => ({ type: FeedbackActions.ADD_REVIEW_FAILURE, payload: { error } });

  return (dispatch: Dispatch<FeedbackAction>) => {
    dispatch(request());

    console.log('addreview', data);
    return FeedbackAPI.addReview(data)
      .then((review) => {
        dispatch(success(review));
      })
      .catch((error) => {
        dispatch(failure(error.toString()));
      });
  };
};
