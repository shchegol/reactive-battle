import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes, { InferProps } from 'prop-types';
import Input from '@components/input';
import Button from '@components/button';

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
          type="password"
          className="input"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          labelText="PASSWORD"
          placeholder="PASSWORD"
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
        <Button type="submit">LOGIN</Button>
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
