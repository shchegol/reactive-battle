import React, { useState } from 'react';
import Input from '@components/input';
import Button from '@components/button';
import { Props } from '@pages/signin/signInForm/types';
import { FormattedMessage, useIntl } from 'react-intl';

const SignInForm = ({
  handleSubmit,
  errorMsg = '',
}: Props) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const intl = useIntl();

  return (
    <form
      onSubmit={(event) => handleSubmit(event, { login, password })}
    >
      <Input
        className="mt-60"
        value={login}
        labelText={intl.formatMessage({ id: 'input.login', defaultMessage: 'LOGIN' })}
        placeholder={intl.formatMessage({ id: 'input.login', defaultMessage: 'LOGIN' })}
        onChange={(event) => setLogin(event.target.value)}
        required
      />

      <Input
        type="password"
        className="input"
        value={password}
        labelText={intl.formatMessage({ id: 'input.password', defaultMessage: 'PASSWORD' })}
        placeholder={intl.formatMessage({ id: 'input.password', defaultMessage: 'PASSWORD' })}
        onChange={(event) => setPassword(event.target.value)}
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
        <FormattedMessage
          id="button.login"
          defaultMessage="LOGIN"
        />
      </Button>
    </form>
  );
};

export default SignInForm;
