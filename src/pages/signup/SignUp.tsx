import React from 'react';
import { Redirect } from 'react-router-dom';
import SignUpForm from '@root/pages/signup/signUpForm';
import MainTitle from '@root/components/mainTitle';
import { SignUpRequest } from '@root/types/models';

import './signup.scss';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '@store/types';
import { signup } from '@store/actionsCreators/auth';

export default function SignUp() {
  const dispatch = useDispatch();
  const { isLoggedIn, error } = useSelector((state: ApplicationState) => state.auth);
  const submitHandler = async (event: React.FormEvent, userData: SignUpRequest) => {
    event.preventDefault();
    dispatch(signup(userData));
  };

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <MainTitle />
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-lg-4">
          <SignUpForm
            handleSubmit={submitHandler}
            errorMsg={error}
          />
        </div>
      </div>
    </div>
  );
}
