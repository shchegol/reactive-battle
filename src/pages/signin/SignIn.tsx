import SignInForm from '@root/pages/signin/signInForm';
import MainTitle from '@root/components/mainTitle';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signin } from '@store/actionsCreators/auth';
import { SignInRequest } from '@api/types';
import { ApplicationState } from '@store/types';

export default function SignIn() {
  const dispatch = useDispatch();
  const { isLoggedIn, error } = useSelector((state: ApplicationState) => state.auth);
  const submitHandler = (event: React.FormEvent, userData: SignInRequest) => {
    event.preventDefault();
    dispatch(signin(userData));
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
          <SignInForm
            handleSubmit={submitHandler}
            errorMsg={error}
          />
        </div>
      </div>
    </div>
  );
}
