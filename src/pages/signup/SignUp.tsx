import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import SignUpForm from '@root/pages/signup/signUpForm';
import MainTitle from '@root/components/mainTitle';
import { SignUpRequest } from '@api/types';
import useAuth from '@root/hooks/useAuth';
import './signup.scss';
import useLoading from '@root/hooks/useLoading';

export default function SignUp() {
  const { isLoggedIn, signup } = useAuth();
  const { hideLoading } = useLoading();

  useEffect(() => {
    hideLoading();
  }, []);

  const submitHandler = async (event: React.FormEvent, userData: SignUpRequest) => {
    event.preventDefault();
    signup(userData);
  };

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div className="container pb-60">
      <div className="row mt-40">
        <div className="col">
          <MainTitle />
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-lg-4 pt-60">
          <SignUpForm
            handleSubmit={submitHandler}
          />
        </div>
      </div>
    </div>
  );
}
