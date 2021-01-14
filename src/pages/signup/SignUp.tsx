import React, { useState } from 'react';
import AuthAPI, { AuthFields } from '@root/api/AuthAPI';
import { useAuth } from '@root/context/auth';
import { Redirect } from 'react-router-dom';
import RegistrationForm from '@root/components/registrationForm';
import MainTitle from '@root/components/mainTitle';

import './signup.scss';

export default function SignUp() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const { setUser } = useAuth();

  const submitHandler = async (event: React.FormEvent, userData: AuthFields) => {
    event.preventDefault();
    const response = await AuthAPI.signup(userData);
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
          <RegistrationForm
            handleSubmit={submitHandler}
            errorMsg={error}
          />
        </div>
      </div>
    </div>
  );
}
