import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '@components/input';
import Button from '@components/button';
import { FormattedMessage, useIntl } from 'react-intl';
import { Props } from '@pages/signup/signUpForm/types';

const SignUpForm = ({
  handleSubmit,
  errorMsg = '',
}: Props) => {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const intl = useIntl();

  return (
    <form
      onSubmit={(event) => {
        handleSubmit(event, {
          first_name: firstName,
          second_name: secondName,
          login,
          email,
          password,
        });
      }}
    >
      <Input
        value={login}
        onChange={(event) => setLogin(event.target.value)}
        labelText={intl.formatMessage({ id: 'input.login', defaultMessage: 'LOGIN' })}
        placeholder={intl.formatMessage({ id: 'input.login', defaultMessage: 'LOGIN' })}
        required
      />

      <Input
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        labelText={intl.formatMessage({ id: 'input.email', defaultMessage: 'EMAIL' })}
        placeholder={intl.formatMessage({ id: 'input.email', defaultMessage: 'EMAIL' })}
        required
      />

      <Input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        labelText={intl.formatMessage({ id: 'input.password', defaultMessage: 'PASSWORD' })}
        placeholder={intl.formatMessage({ id: 'input.password', defaultMessage: 'PASSWORD' })}
        required
      />

      <Input
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
        labelText={intl.formatMessage({ id: 'input.firstName', defaultMessage: 'FIRST NAME' })}
        placeholder={intl.formatMessage({ id: 'input.firstName', defaultMessage: 'FIRST NAME' })}
      />

      <Input
        value={secondName}
        onChange={(event) => setSecondName(event.target.value)}
        labelText={intl.formatMessage({ id: 'input.secondName', defaultMessage: 'SECOND NAME' })}
        placeholder={intl.formatMessage({ id: 'input.secondName', defaultMessage: 'SECOND NAME' })}
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
          id="button.register"
          defaultMessage="REGISTER"
        />
      </Button>

      <div className="text-align-center mt-20">
        <Link to="/signin">
          <FormattedMessage
            id="button.login"
            defaultMessage="LOGIN"
          />
        </Link>
      </div>
    </form>
  );
};

export default SignUpForm;
