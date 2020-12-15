import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './signin.scss';

const logo = require('@root/svg/logo.svg').default;

export default function SignIn() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="signin">
      <img src={logo} alt="Reactive Battle" />
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
      <div style={{ marginTop: 40 }}>
        <button type="button" className="button" onClick={() => console.log('login')}>SIGN IN</button>
      </div>
      <div style={{ marginTop: 40 }}>
        <Link to="/signup">REGISTER</Link>
      </div>
    </div>
  );
}
