import React, { FC } from 'react';
import Input from '@components/input';
import Button from '@components/button';
import { Props } from './types';

const ProfileEditForm: FC<Props> = ({
  errorMsg = '',
  userData = {},
  onInputChange = undefined,
  ...rest
}) => (
  <form
    onSubmit={rest.onSubmit}
  >
    <Input
      labelText="LOGIN"
      value={userData.login}
      name="login"
      placeholder="LOGIN"
      onChange={onInputChange}
    />

    <Input
      labelText="DISPLAY NAME"
      value={userData.display_name}
      name="display_name"
      placeholder="DISPLAY NAME"
      onChange={onInputChange}
    />

    <Input
      labelText="FIRST NAME"
      value={userData.first_name}
      name="first_name"
      placeholder="FIRST NAME"
      onChange={onInputChange}
    />

    <Input
      labelText="SECOND NAME"
      value={userData.second_name}
      name="second_name"
      placeholder="SECOND NAME"
      onChange={onInputChange}
    />

    <Input
      labelText="EMAIL"
      value={userData.email}
      name="email"
      placeholder="EMAIL"
      onChange={onInputChange}
    />

    <Input
      labelText="PHONE"
      value={userData.phone}
      name="phone"
      placeholder="PHONE"
      onChange={onInputChange}
    />

    <Input
      labelText="PASSWORD"
      type="password"
      value={userData.oldPassword}
      name="oldPassword"
      placeholder="OLD PASSWORD"
      onChange={onInputChange}
    />

    <Input
      labelText="PASSWORD"
      type="password"
      value={userData.newPassword}
      name="newPassword"
      placeholder="NEW PASSWORD"
      onChange={onInputChange}
    />

    { !!errorMsg && (
      <div className="text-color-danger mt-20">
        {errorMsg}
      </div>
    ) }

    <Button
      type="submit"
      className="mt-40"
    >
      CHANGE
    </Button>
  </form>
);

export default ProfileEditForm;
