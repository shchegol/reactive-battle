import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserAPI from '@root/api/UserAPI';
import AuthAPI from '@root/api/AuthAPI';
import ProfileForm from '@components/profileForm';
import Button from '@components/button';

/**
 * User profile edit page
 * @constructor
 */

export default function ProfileEdit() {
  const history = useHistory();
  const [error, setError] = useState('');
  const [userData, setUserData] = useState({
    login: '',
    display_name: '',
    first_name: '',
    second_name: '',
    email: '',
    phone: '',
    old_password: '',
    new_password: '',
  });

  const handleGoBack = () => history.goBack();
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = { [event.target.name]: event.target.value };
    const newValue = {
      ...userData,
      ...value,
    };
    setUserData(newValue);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // изменение инфы
    UserAPI
      .editProfile(userData)
      .catch((err) => {
        setError(err.reason);
      });

    // изменение пароля
    if (userData.old_password && userData.new_password) {
      UserAPI
        .changePassword({
          old_password: userData.old_password,
          new_password: userData.new_password,
        })
        .catch((err) => {
          setError(err.reason);
        });
    }
  };

  useEffect(() => {
    // подгружаем существующие данные
    AuthAPI
      .fetchUser()
      .then((data) => {
        const newData = {
          ...userData,
          ...data,
        };

        if (!newData.display_name) {
          newData.display_name = newData.login;
        }

        setUserData(newData);
      })
      .catch((err) => {
        setError(err.reason);
      });
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
        <div className="col-12 col-sm-8 col-md-6 col-lg-4">
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
