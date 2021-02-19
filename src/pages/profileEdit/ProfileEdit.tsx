import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { changeProfile, changeAvatar, changePassword } from '@store/actionsCreators/user';
import ProfileEditForm from '@pages/profileEdit/profileEditForm';
import Button from '@components/button';
import Avatar from '@components/avatar';
import authSelector from '@store/selectors/auth';
import userSelector from '@store/selectors/user';
import Icon from '@components/icon';
import { Helmet } from 'react-helmet';

/**
 * User profile edit page
 * @constructor
 */

interface UserProfile {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  oldPassword?: string;
  newPassword?: string;
}

export default function ProfileEdit() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { ...user } = useSelector(userSelector);
  const { isOAuth } = useSelector(authSelector);
  const [userData, setUserData] = useState({
    first_name: '',
    second_name: '',
    display_name: '',
    login: '',
    email: '',
    phone: '',
    oldPassword: '',
    newPassword: '',
  } as UserProfile);

  useEffect(() => {
    if (!user.display_name) {
      setUserData({
        ...user,
        display_name: user.login,
      });
    } else {
      setUserData(user);
    }
  }, []);

  const handleGoBack = useCallback(() => history.goBack(), [history]);

  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = { [event.target.name]: event.target.value };
    const newValue = {
      ...userData,
      ...value,
    };
    setUserData(newValue);
  }, [userData]);

  const handleAvatarChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.currentTarget;
    if (!files) return;

    const avatarFile = files[0];
    if (avatarFile) {
      dispatch(changeAvatar(avatarFile));
    }
  }, [dispatch]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { oldPassword, newPassword } = userData;

    if (oldPassword && newPassword) {
      dispatch(changePassword({ oldPassword, newPassword }));
    } else {
      dispatch(changeProfile(userData));
    }
  };

  return (
    <div className="container-fluid">
      <Helmet title="Change profile" />

      <div className="row mt-20">
        <div className="col-12 col-md-2 col-lg-3">
          <Button
            type="button"
            color="link"
            size="xl"
            onClick={handleGoBack}
            icon
          >
            <Icon name="arrow_back" />
          </Button>
        </div>

        <div className="col-12 col-md-8 col-lg-6">
          <div className="row justify-content-center">
            <div className="col-auto">
              <Avatar
                src={user.avatar}
                alt="CHANGE AVATAR"
                size="l"
                onInputChange={handleAvatarChange}
              />
            </div>
          </div>

          <ProfileEditForm
            className="mt-40"
            userData={userData}
            errorMsg=""
            onInputChange={handleInputChange}
            isOAuth={isOAuth}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}
