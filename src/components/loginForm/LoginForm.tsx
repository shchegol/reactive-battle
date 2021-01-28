import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '@components/input';
import Button from '@components/button';
import { Props } from '@components/loginForm/types';

const LoginForm = ({
  handleSubmit,
  errorMsg,
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
        className="mt-40"
      >
        LOGIN
      </Button>

      <div className="text-align-center mt-20">
        <Link to="/signup">
          REGISTER
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
