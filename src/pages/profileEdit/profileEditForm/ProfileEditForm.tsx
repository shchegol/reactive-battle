import React, { FC } from 'react';
import Input from '@components/input';
import Button from '@components/button';
import { Props } from './types';

const ProfileEditForm: FC<Props> = ({
  errorMsg = '',
  userData = {},
  isOAuth = false,
  onInputChange = undefined,
  ...rest
}) => (
  <form
    className={rest.className}
    onSubmit={rest.onSubmit}
  >
    <div className="row">
      <div className="col pr-4">
        <Input
          labelText="LOGIN"
          value={userData.login}
          name="login"
          placeholder="LOGIN"
          onChange={onInputChange}
        />
      </div>
      <div className="col pl-4">
        <Input
          labelText="DISPLAY NAME"
          value={userData.display_name}
          name="display_name"
          placeholder="DISPLAY NAME"
          onChange={onInputChange}
        />
      </div>
    </div>

    <div className="row">
      <div className="col pr-4">
        <Input
          labelText="FIRST NAME"
          value={userData.first_name}
          name="first_name"
          placeholder="FIRST NAME"
          onChange={onInputChange}
        />
      </div>
      <div className="col pl-4">
        <Input
          labelText="SECOND NAME"
          value={userData.second_name}
          name="second_name"
          placeholder="SECOND NAME"
          onChange={onInputChange}
        />
      </div>
    </div>

    <div className="row">
      <div className="col pr-4">
        <Input
          labelText="EMAIL"
          value={userData.email}
          name="email"
          placeholder="EMAIL"
          onChange={onInputChange}
        />
      </div>
      <div className="col pl-4">
        <Input
          labelText="PHONE"
          value={userData.phone}
          name="phone"
          placeholder="PHONE"
          onChange={onInputChange}
        />
      </div>
    </div>

    { !isOAuth && (
      <div className="row">
        <div className="col pr-4">
          <Input
            labelText="OLD PASSWORD"
            type="password"
            value={userData.oldPassword}
            name="oldPassword"
            placeholder="OLD PASSWORD"
            onChange={onInputChange}
          />
        </div>
        <div className="col pl-4">
          <Input
            labelText="NEW PASSWORD"
            type="password"
            value={userData.newPassword}
            name="newPassword"
            placeholder="NEW PASSWORD"
            onChange={onInputChange}
          />
        </div>
      </div>
    ) }

    { !!errorMsg && (
      <div className="text-color-danger mt-20">
        {errorMsg}
      </div>
    ) }

    <div className="row justify-content-center mt-40">
      <div className="col-6">
        <Button
          type="submit"
          width="full"
        >
          SAVE
        </Button>
      </div>
    </div>
  </form>
);

export default ProfileEditForm;
