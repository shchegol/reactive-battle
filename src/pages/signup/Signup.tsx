import Logo from '@root/components/logo';
import RegistrationForm from '@root/components/registrationForm';
import Title from '@root/components/title';
import React from 'react';

import './signup.scss';

export default function SignUp() {
  return (
    <div className="signup">
      <Logo />
      <Title />
      <RegistrationForm />
    </div>
  );
}
