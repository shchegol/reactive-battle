import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '@components/input';
import Button from '@components/button';
import { Props } from '@pages/signup/signUpForm/types';

const SignUpForm = ({
  handleSubmit,
  errorMsg = '',
}: Props) => {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form
      onSubmit={(event) => {
        handleSubmit(event, {
          first_name: firstName,
          second_name: secondName,
          login,
          email,
          password,
        });
      }}
    >
      <Input
        labelText="LOGIN"
        value={login}
        onChange={(event) => setLogin(event.target.value)}
        placeholder="LOGIN"
        required
      />

      <Input
        labelText="EMAIL"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="EMAIL"
        required
      />

      <Input
        labelText="PASSWORD"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="PASSWORD"
        required
      />

      <Input
        labelText="FIRST NAME"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
        placeholder="FIRST NAME"
      />

      <Input
        labelText="SECOND NAME"
        value={secondName}
        onChange={(event) => setSecondName(event.target.value)}
        placeholder="SECOND NAME"
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
        REGISTER
      </Button>

      <div className="text-align-center mt-20">
        <Link to="/signin">SIGN IN</Link>
      </div>
    </form>
  );
};

export default SignUpForm;
