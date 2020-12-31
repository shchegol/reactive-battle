import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '@components/input';
import Button from '@components/button';
import PropTypes, { InferProps } from 'prop-types';

import './RegistrationForm.scss';

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
      className="registration-form"
      onSubmit={(event) => {
        const data = {
          firstName, secondName, login, email, password, phone,
        };
        handleSubmit(event, data);
      }}
    >
      <div style={{ marginTop: 80 }}>
        <Input
          labelText="FIRST NAME"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          placeholder="FIRST NAME"
          required
        />
      </div>
      <div>
        <Input
          labelText="SECOND NAME"
          value={secondName}
          onChange={(event) => setSecondName(event.target.value)}
          placeholder="SECOND NAME"
          required
        />
      </div>
      <div>
        <Input
          labelText="LOGIN"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
          placeholder="LOGIN"
          required
        />
      </div>
      <div>
        <Input
          labelText="EMAIL"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="EMAIL"
          required
        />
      </div>
      <div>
        <Input
          labelText="PASSWORD"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="PASSWORD"
          required
        />
      </div>
      <div>
        <Input
          labelText="PHONE"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          placeholder="PHONE"
          required
        />
      </div>
      { !!errorMsg && (
      <div
        className="error"
        style={{ marginTop: 25 }}
      >
        {errorMsg}
      </div>
      ) }
      <div style={{ marginTop: 40 }}>
        <Button type="submit">REGISTER</Button>
      </div>
      <div style={{ marginTop: 40 }}>
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
