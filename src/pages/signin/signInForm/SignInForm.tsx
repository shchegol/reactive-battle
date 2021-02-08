import React, { useState } from 'react';
import Input from '@components/input';
import Button from '@components/button';
import { Props } from '@pages/signin/signInForm/types';

const SignInForm = ({
  handleSubmit,
  errorMsg = '',
}: Props) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form
      onSubmit={(event) => handleSubmit(event, { login, password })}
    >
      <Input
        className="mt-60"
        labelText="LOGIN"
        value={login}
        onChange={(event) => setLogin(event.target.value)}
        placeholder="LOGIN"
        required
      />

      <Input
        type="password"
        className="input"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        labelText="PASSWORD"
        placeholder="PASSWORD"
        required
      />

      { !!errorMsg && (
      <div className="text-color-danger mt-20">
        {errorMsg}
      </div>
      ) }

      <Button
        type="submit"
        width="full"
        className="mt-20"
      >
        LOGIN
      </Button>
    </form>
  );
};

export default SignInForm;
