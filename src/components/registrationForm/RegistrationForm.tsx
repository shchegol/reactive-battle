import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '@components/input';
import Button from '@components/button';
import PropTypes, { InferProps } from 'prop-types';

function RegistrationForm({
  handleSubmit,
  errorMsg,
}: InferProps<typeof RegistrationForm.propTypes>) {
  const [firstName, setFirstName] = useState<string>();
  const [secondName, setSecondName] = useState<string>();
  const [login, setLogin] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [phone, setPhone] = useState<string>();

  return (
    <form
      onSubmit={(event) => {
        handleSubmit(event, {
          firstName, secondName, login, email, password, phone,
        });
      }}
    >
      <Input
        className="mt-60"
        labelText="FIRST NAME"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
        placeholder="FIRST NAME"
        required
      />

      <Input
        labelText="SECOND NAME"
        value={secondName}
        onChange={(event) => setSecondName(event.target.value)}
        placeholder="SECOND NAME"
        required
      />

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
        labelText="PHONE"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
        placeholder="PHONE"
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
        REGISTER
      </Button>

      <div className="text-align-center mt-20">
        <Link to="/signin">SIGN IN</Link>
      </div>
    </form>
  );
}

RegistrationForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  errorMsg: PropTypes.string,
};

RegistrationForm.defaultProps = {
  errorMsg: '',
};

export default RegistrationForm;
