import React, { FC } from 'react';
import Input from '@components/input';
import Button from '@components/button';
import { useIntl } from 'react-intl';
import { Props } from './types';

const ProfileEditForm: FC<Props> = ({
  errorMsg = '',
  userData = {},
  isOAuth = false,
  onInputChange = undefined,
  ...rest
}) => {
  const intl = useIntl();

  return (
    <form
      className={rest.className}
      onSubmit={rest.onSubmit}
    >

      <div className="row">
        <div className="col-12">
          <Input
            value={userData.avatar}
            name="avatar"
            labelText={intl.formatMessage({ id: 'input.avatarURL', defaultMessage: 'AVATAR URL' })}
            placeholder={intl.formatMessage({ id: 'input.avatarURL', defaultMessage: 'AVATAR URL' })}
            onChange={onInputChange}
          />
        </div>

        <div className="col-12 mt-40">
          <Input
            value={userData.email}
            name="email"
            labelText={intl.formatMessage({ id: 'input.email', defaultMessage: 'EMAIL' })}
            placeholder={intl.formatMessage({ id: 'input.email', defaultMessage: 'EMAIL' })}
            onChange={onInputChange}
          />
        </div>

        <div className="col-12">
          <Input
            value={userData.first_name}
            name="first_name"
            labelText={intl.formatMessage({ id: 'input.firstName', defaultMessage: 'FIRST NAME' })}
            placeholder={intl.formatMessage({ id: 'input.firstName', defaultMessage: 'FIRST NAME' })}
            onChange={onInputChange}
          />
        </div>

        <div className="col-12">
          <Input
            value={userData.second_name}
            name="second_name"
            labelText={intl.formatMessage({ id: 'input.secondName', defaultMessage: 'SECOND NAME' })}
            placeholder={intl.formatMessage({ id: 'input.secondName', defaultMessage: 'SECOND NAME' })}
            onChange={onInputChange}
          />
        </div>

        { !isOAuth && (
          <>
            <div className="col-12 mt-40">
              <Input
                type="password"
                value={userData.oldPassword}
                name="oldPassword"
                labelText={intl.formatMessage({ id: 'input.oldPassword', defaultMessage: 'OLD PASSWORD' })}
                placeholder={intl.formatMessage({ id: 'input.oldPassword', defaultMessage: 'OLD PASSWORD' })}
                onChange={onInputChange}
              />
            </div>

            <div className="col-12">
              <Input
                type="password"
                value={userData.newPassword}
                name="newPassword"
                labelText={intl.formatMessage({ id: 'input.newPassword', defaultMessage: 'NEW PASSWORD' })}
                placeholder={intl.formatMessage({ id: 'input.newPassword', defaultMessage: 'NEW PASSWORD' })}
                onChange={onInputChange}
              />
            </div>
          </>
        ) }
      </div>

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
};

export default ProfileEditForm;
