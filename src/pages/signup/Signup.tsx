import Logo from '@root/components/logo';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './signup.scss';

export default function Signup() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  return (
    <div className="signup">
      <Logo />
      <h1 className="title">
        REACTIVE BATTLE
      </h1>
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
        <button type="button" className="button" onClick={() => console.log('register')}>REGISTER</button>
      </div>
      <div style={{ marginTop: 40 }}>
        <Link to="/login">SIGN IN</Link>
      </div>
    </div>
  );
}
