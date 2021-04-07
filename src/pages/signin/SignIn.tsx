import SignInForm from '@root/pages/signin/signInForm';
import MainTitle from '@root/components/mainTitle';
import React, { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { SignInRequest } from '@api/types';
import { FormattedMessage } from 'react-intl';
// import Button from '@components/button';
// import AuthAPI from '@api/AuthAPI';
// import { API_YANDEX_OAUTH_URL, API_YANDEX_REDIRECT_URI } from '@root/constants';
import { Helmet } from 'react-helmet';
import useAuth from '@root/hooks/useAuth';
import useLoading from '@root/hooks/useLoading';
import TopMenu from '@components/topMenu';
// import useSnackbar from '@root/hooks/useSnackbar';

export default function SignIn() {
  const { isLoggedIn, signin } = useAuth();
  const { hideLoading } = useLoading();
  // const { showSnackbar } = useSnackbar();

  useEffect(() => {
    hideLoading();
  }, []);

  const submitHandler = (event: React.FormEvent, userData: SignInRequest) => {
    event.preventDefault();
    signin(userData);
  };

  // const yandexOauthHandler = () => {
  //   const getOAuthUrl = (serviceId: string): string => `${API_YANDEX_OAUTH_URL}?response_type=code&client_id=${serviceId}&redirect_uri=${API_YANDEX_REDIRECT_URI}`;
  //
  //   AuthAPI.yaGetServiceId()
  //     .then((res) => {
  //       window.location.assign(getOAuthUrl(res.service_id));
  //     })
  //     .catch((err) => {
  //       showSnackbar(err, 'danger');
  //     });
  // };

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div className="container pb-60">
      <Helmet title="Signin" />

      <TopMenu />
      <div className="row mt-40">
        <div className="col">
          <MainTitle />
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-lg-4">
          <SignInForm
            handleSubmit={submitHandler}
          />

          {/* <div className="text-align-center mt-10"> */}
          {/*  <Button */}
          {/*    color="danger" */}
          {/*    title="via Yandex" */}
          {/*    width="full" */}
          {/*    onClick={yandexOauthHandler} */}
          {/*  > */}
          {/*    YANDEX */}
          {/*  </Button> */}
          {/* </div> */}

          <div className="text-align-center mt-20">
            <Link to="/signup">
              <FormattedMessage
                id="button.register"
                defaultMessage="REGISTER"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
