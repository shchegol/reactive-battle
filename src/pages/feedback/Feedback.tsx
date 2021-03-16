import { useHistory } from 'react-router-dom';
import React, { useCallback, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Button from '@components/button';
import Icon from '@components/icon';
import MainTitle from '@components/mainTitle';
import FeedbackForm from '@pages/feedback/feedBackForm';
import { useDispatch, useSelector } from 'react-redux';
import userSelector from '@store/selectors/user';
import { Review } from '@store/types';
import { addReview } from '@store/actionsCreators/feedback';

export default function Feedback() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { display_name: displayName, login, email } = useSelector(userSelector);
  const [reviewData, setReviewData] = useState<Partial<Review>>({
    login,
    email,
    name: displayName || login,
    text: '',
  });

  useEffect(() => setReviewData({ login, email, name: displayName || login }), [login]);

  const handleGoBack = () => history.goBack();

  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setReviewData({
      ...reviewData,
      [event.target.name]: event.target.value,
    });
  }, [reviewData]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(addReview(reviewData));
  };

  return (
    <div className="container-fluid">
      <Helmet
        title="Feedback"
      />
      <div className="row justify-content-left mt-20">
        <div className="col-12 col-md-2 col-lg-3">
          <Button
            type="button"
            color="link"
            size="xl"
            onClick={handleGoBack}
            icon
          >
            <Icon name="arrow_back" />
          </Button>
        </div>

        <div className="col-12 col-md-8 col-lg-6">
          <div className="row mb-40">
            <div className="col">
              <MainTitle
                subtitleText="Give feedback"
              />
            </div>
          </div>

          <FeedbackForm
            className="mt-40"
            userData={reviewData}
            errorMsg=""
            onInputChange={handleInputChange}
            onSubmit={handleSubmit}
          />

        </div>
      </div>
    </div>
  );
}
