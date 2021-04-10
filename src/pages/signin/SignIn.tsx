import SignInForm from '@root/pages/signin/signInForm';
import MainTitle from '@root/components/mainTitle';
import React from 'react';
import { Link } from 'react-router-dom';
import { SignInRequest } from '@api/types';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';
import useAuth from '@root/hooks/useAuth';
import TopMenu from '@components/topMenu';

export default function SignIn() {
  const { signin } = useAuth();

  const submitHandler = (event: React.FormEvent, userData: SignInRequest) => {
    event.preventDefault();
    signin(userData);
  };

  return (
    <div className="container-fluid pb-60">
      <Helmet title="Signin" />

      <TopMenu className="mt-20" />

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
