import React, { useEffect, useState } from 'react';
import MainTitle from '@root/components/mainTitle';
import Button from '@components/button';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import AuthAPI from '@root/api/AuthAPI';
import { API_URL } from '@root/constants';
import { UserResponse } from '@root/types/models';
import { logout } from '@store/actionsCreators/auth';
import { useDispatch } from 'react-redux';

/**
 * User profile page
 * @constructor
 */

export default function Profile() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { url } = useRouteMatch();
  const [userData, setUserData] = useState({
    first_name: '',
    second_name: '',
    display_name: '',
    login: '',
    email: '',
    phone: '',
    avatar: '',
  } as UserResponse);
  const avatarUrl = userData.avatar
    ? new URL(userData.avatar, API_URL).href
    : undefined;
  const handleGoBack = () => history.goBack();
  const handleLogout = () => dispatch(logout());

  useEffect(() => {
    AuthAPI
      .fetchUser()
      .then((res) => res.json())
      .then((data) => setUserData(data));
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

      <div className="row">
        <div className="col">
          <MainTitle
            titleText={userData.login}
            subtitleText={userData.email}
            imgSrc={avatarUrl}
          />
        </div>
      </div>

      <div className="row justify-content-center mt-60">
        <div className="col-8">
          <div className="row">
            <div className="col text-align-right text-color-secondary pr-4">
              NAME
            </div>
            <div className="col pl-4">
              {userData.first_name}
            </div>
          </div>

          <div className="row mt-10">
            <div className="col text-align-right text-color-secondary pr-4">
              SURNAME
            </div>
            <div className="col pl-4">
              {userData.second_name}
            </div>
          </div>

          <div className="row mt-10">
            <div className="col text-align-right text-color-secondary pr-4">
              NICKNAME
            </div>
            <div className="col pl-4">
              {userData.display_name}
            </div>
          </div>

          <div className="row mt-10">
            <div className="col text-align-right text-color-secondary pr-4">
              PHONE
            </div>
            <div className="col pl-4">
              {userData.phone}
            </div>
          </div>

          <div className="row justify-content-center mt-60">
            <div className="col-4">
              <Link
                to={`${url}/edit`}
                className="button button_width_full"
              >
                Change
              </Link>

              <div className="text-align-center mt-20">
                <Button
                  type="button"
                  color="link"
                  onClick={handleLogout}
                >
                  LOGOUT
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
