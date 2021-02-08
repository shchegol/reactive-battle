import SignInForm from '@root/pages/signin/signInForm';
import MainTitle from '@root/components/mainTitle';
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { SignInRequest } from '@api/types';
import Button from '@components/button';
import AuthAPI from '@api/AuthAPI';
import { API_YANDEX_OAUTH_URL } from '@root/constants';
import { Helmet } from 'react-helmet';
import useAuth from '@root/hooks/useAuth';
import useSnackbar from '@root/hooks/useSnackbar';

export default function SignIn() {
  const [isLoggedIn, signin] = useAuth();
  const [showSnackbar] = useSnackbar();

  const submitHandler = (event: React.FormEvent, userData: SignInRequest) => {
    event.preventDefault();
    signin(userData);
  };

  const yandexOauthHandler = () => {
    const getOAuthUrl = (serviceId: string): string => `${API_YANDEX_OAUTH_URL}?response_type=code&client_id=${serviceId}`;

    AuthAPI.yaGetServiceId()
      .then((res) => res.json())
      .then((res) => {
        window.location.assign(getOAuthUrl(res.service_id));
      })
      .catch((err) => {
        showSnackbar(err, 'danger');
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
