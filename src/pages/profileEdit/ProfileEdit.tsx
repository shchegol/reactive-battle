import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserAPI from '@root/api/UserAPI';
import AuthAPI from '@root/api/AuthAPI';
import ProfileForm from '@components/profileForm';
import Button from '@components/button';
import Avatar from '@components/avatar';
import { API_URL } from '@root/constants';
import { setAvatar } from '@root/store/reducers/profile';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '@root/store/types';

/**
 * User profile edit page
 * @constructor
 */

export default function ProfileEdit() {
  const history = useHistory();
  const [error, setError] = useState('');
  const [userData, setUserData] = useState({
    first_name: '',
    second_name: '',
    display_name: '',
    login: '',
    email: '',
    phone: '',
    oldPassword: '',
    newPassword: '',
  });

  const dispatch = useDispatch();
  const avatar = useSelector((state: ApplicationState) => state.profile?.user?.avatar);

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
      UserAPI
        .uploadAvatar(avatarFile)
        .then((data) => {
          if (data.avatar) {
            dispatch(setAvatar(new URL(data.avatar, API_URL).href));
          }
        })
        .catch((err) => setError(err.reason));
    }
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // изменение инфы
    UserAPI
      .editProfile(userData)
      .catch((err) => setError(err.reason));

    // изменение пароля
    const { oldPassword, newPassword } = userData;
    if (oldPassword && newPassword) {
      UserAPI
        .changePassword({ oldPassword, newPassword })
        .catch((err) => setError(err.reason));
    }
  };

  useEffect(() => {
    AuthAPI
      .fetchUser()
      .then((res) => res.json())
      .then((data) => {
        if (data.avatar) {
          setAvatar(new URL(data.avatar, API_URL).href);
        }

        setUserData(data);
      })
      .catch((err) => setError(err.reason));
  }, []);

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
            src={avatar}
            alt="CHANGE AVATAR"
            onInputChange={handleAvatarChange}
          />
        </div>
        <div className="col-8 col-sm-6 col-md-5 col-lg-3">
          <ProfileForm
            userData={userData}
            errorMsg={error}
            onInputChange={handleInputChange}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}
