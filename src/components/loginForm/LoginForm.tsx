import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes, { InferProps } from 'prop-types';

import './LoginForm.scss';

function LoginForm({ handleSubmit, errorMsg }: InferProps<typeof LoginForm.propTypes>) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form
      className="login-form"
      onSubmit={(event) => handleSubmit(event, { login, password })}
    >
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
      { !!errorMsg && <div className="error" style={{ marginTop: 25 }}>{errorMsg}</div> }
      <div style={{ marginTop: 40 }}>
        <button type="submit" className="button">SIGN IN</button>
      </div>
      <div style={{ marginTop: 40 }}>
        <Link to="/signup">REGISTER</Link>
      </div>
    </form>
  );
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  errorMsg: PropTypes.string,
};

LoginForm.defaultProps = {
  errorMsg: '',
};

export default LoginForm;
