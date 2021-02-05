import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ApplicationState } from '@store/types';
import { changeProfile, changeAvatar, changePassword } from '@store/actionsCreators/user';
import ProfileEditForm from '@pages/profileEdit/profileEditForm';
import Button from '@components/button';
import Avatar from '@components/avatar';
import { API_URL } from '@root/constants';

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

  const user = useSelector((state: ApplicationState) => state.user);
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

  // todo это надо переиспользовать. В profile тоже самое
  const avatarUrl = user.info.avatar
    ? new URL(user.info.avatar, API_URL).href
    : undefined;

  useEffect(() => {
    if (!user.info.display_name) {
      setUserData({
        ...user.info,
        display_name: user.info.login,
      });
    } else {
      setUserData(user.info);
    }
  }, [user.info]);

  const handleGoBack = () => history.goBack();
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = { [event.target.name]: event.target.value };
    const newValue = {
      ...userData,
      ...value,
    };
    setUserData(newValue);
  };

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.currentTarget;
    if (!files) return;

    const avatarFile = files[0];
    if (avatarFile) {
      dispatch(changeAvatar(avatarFile));
    }
  };

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
      <div className="row mt-10">
        <div className="col-auto">
          <Button
            type="button"
            color="link"
            onClick={handleGoBack}
          >
            GO BACK
          </Button>
        </div>
      </div>

      <div className="row justify-content-center mt-60">
        <div className="col-3 col-sm-3 col-md-3 col-lg-2">
          <Avatar
            src={avatarUrl}
            alt="CHANGE AVATAR"
            onInputChange={handleAvatarChange}
          />
        </div>
        <div className="col-8 col-sm-6 col-md-5 col-lg-3">
          <ProfileEditForm
            userData={userData}
            errorMsg={user.error}
            onInputChange={handleInputChange}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}
