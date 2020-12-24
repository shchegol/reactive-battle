import Logo from '@root/components/logo';
import RegistrationForm from '@root/components/registrationForm';
import Title from '@root/components/title';
import React, { useState } from 'react';
import AuthAPI, { AuthFields } from '@root/api/AuthAPI';
import { useAuth } from '@root/context/auth';
import { Redirect } from 'react-router-dom';

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
    return <Redirect to="/game" />;
  }

  return (
    <div className="signup">
      <Logo />
      <Title />
      <RegistrationForm
        handleSubmit={submitHandler}
        errorMsg={error}
      />
    </div>
  );
}
