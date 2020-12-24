import LoginForm from '@root/components/loginForm';
import Logo from '@root/components/logo';
import Title from '@root/components/title';
import React, { useState } from 'react';
import AuthAPI, { AuthFields } from '@root/api/AuthAPI';
import { Redirect } from 'react-router-dom';
import { useAuth } from '@root/context/auth';

import './signin.scss';

export default function SignIn() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const { setUser } = useAuth();

  const submitHandler = async (event: React.FormEvent, userData: AuthFields) => {
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
    return <Redirect to="/game" />;
  }

  return (
    <div className="signin">
      <Logo />
      <Title />
      <LoginForm handleSubmit={submitHandler} errorMsg={error} />
    </div>
  );
}
