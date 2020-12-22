import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './LoginForm.scss';

export default function LoginForm() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form className="login-form">
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
    </form>
  );
}
