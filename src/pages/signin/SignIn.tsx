import LoginForm from '@root/components/loginForm';
import MainTitle from '@root/components/mainTitle';
import React, { useState } from 'react';
import AuthAPI from '@root/api/AuthAPI';
import { Redirect } from 'react-router-dom';
import { useAuth } from '@root/context/auth';
import { SignInRequest } from '@root/types/models';

export default function SignIn() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const { setUser } = useAuth();

  const submitHandler = async (event: React.FormEvent, userData: SignInRequest) => {
    event.preventDefault();
    const response = await AuthAPI.signin(userData);
    if (response.ok) {
      setUser(userData.login);
      setLoggedIn(true);
    } else {
      const json = await response.json();
      setError(json.reason);
    }
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
          <LoginForm
            handleSubmit={submitHandler}
            errorMsg={error}
          />
        </div>
      </div>
    </div>
  );
}
