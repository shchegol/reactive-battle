import SignInForm from '@root/pages/signin/signInForm';
import MainTitle from '@root/components/mainTitle';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { signin } from '@store/actionsCreators/auth';
import { SignInRequest } from '@api/types';
import { ApplicationState } from '@store/types';
import Button from '@components/button';
import AuthAPI from '@api/AuthAPI';
import { API_YANDEX_OAUTH_URL } from '@root/constants';
import { showSnackbar } from '@store/actionsCreators/snackbar';
import { Helmet } from 'react-helmet';

export default function SignIn() {
  const dispatch = useDispatch();
  const { isLoggedIn, error } = useSelector((state: ApplicationState) => state.auth);

  const submitHandler = (event: React.FormEvent, userData: SignInRequest) => {
    event.preventDefault();
    dispatch(signin(userData));
  };

  const yandexOauthHandler = () => {
    const getOAuthUrl = (serviceId: string): string => `${API_YANDEX_OAUTH_URL}?response_type=code&client_id=${serviceId}`;

    AuthAPI.yaGetServiceId()
      .then((res) => res.json())
      .then((res) => {
        window.location.assign(getOAuthUrl(res.service_id));
      })
      .catch((err) => {
        dispatch(showSnackbar({ message: err, type: 'danger' }));
      });
  };

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div className="container">
      <Helmet title="Signin" />
      <div className="row">
        <div className="col">
          <MainTitle />
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-lg-4">
          <SignInForm
            handleSubmit={submitHandler}
            errorMsg={error}
          />

          <div className="text-align-center mt-10">
            <Button
              color="danger"
              title="via Yandex"
              width="full"
              onClick={yandexOauthHandler}
            >
              YANDEX
            </Button>
          </div>

          <div className="text-align-center mt-40">
            <Link to="/signup">
              REGISTER
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
