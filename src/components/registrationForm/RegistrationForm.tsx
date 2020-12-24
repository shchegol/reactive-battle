import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
        <input
          className="input"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          placeholder="FIRST NAME"
        />
      </div>
      <div style={{ marginTop: 25 }}>
        <input
          className="input"
          value={secondName}
          onChange={(event) => setSecondName(event.target.value)}
          placeholder="SECOND NAME"
        />
      </div>
      <div style={{ marginTop: 25 }}>
        <input
          className="input"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
          placeholder="LOGIN"
        />
      </div>
      <div style={{ marginTop: 25 }}>
        <input
          className="input"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="EMAIL"
        />
      </div>
      <div style={{ marginTop: 25 }}>
        <input
          type="password"
          className="input"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="PASSWORD"
        />
      </div>
      <div style={{ marginTop: 25 }}>
        <input
          className="input"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          placeholder="PHONE"
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
