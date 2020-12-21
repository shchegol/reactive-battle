import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@components/button';

import './RegistrationForm.scss';

export default function RegistrationForm() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  return (
    <form className="registration-form">
      <div style={{ marginTop: 80 }}>
        <input
          className="input"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
          placeholder="LOGIN"
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
          type="password"
          className="input"
          value={confirm}
          onChange={(event) => setConfirm(event.target.value)}
          placeholder="CONFIRM PASSWORD"
        />
      </div>
      <div style={{ marginTop: 40 }}>
        <Button onClick={() => console.log('register')}>REGISTER</Button>
      </div>
      <div style={{ marginTop: 40 }}>
        <Link to="/signin">SIGN IN</Link>
      </div>
    </form>
  );
}
