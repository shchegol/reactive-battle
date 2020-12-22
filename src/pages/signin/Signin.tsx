import LoginForm from '@root/components/loginForm';
import Logo from '@root/components/logo';
import Title from '@root/components/title';
import React from 'react';

import './signin.scss';

export default function SignIn() {
  return (
    <div className="signin">
      <Logo />
      <Title />
      <LoginForm />
    </div>
  );
}
