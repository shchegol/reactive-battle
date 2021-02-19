import React from 'react';
import MainTitle from '@root/components/mainTitle';
import Button from '@components/button';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import { logout } from '@store/actionsCreators/auth';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import userSelector from '@store/selectors/user';
import Icon from '@components/icon';

/**
 * User profile page
 * @constructor
 */

export default function Profile() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { url } = useRouteMatch();
  const { ...user } = useSelector(userSelector);

  const handleGoBack = () => history.goBack();
  const handleLogout = () => {
    dispatch(logout());
    history.push('/signin');
  };

  return (
    <div className="container-fluid">
      <Helmet title="Profile" />

      <div className="row mt-10">
        <div className="col-auto">
          <Button
            type="button"
            color="link"
            size="xl"
            icon
            onClick={handleGoBack}
          >
            <Icon name="arrow_back" />
          </Button>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <MainTitle
            titleText={user.login}
            subtitleText={user.email}
            imgSrc={user.avatar}
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
              {user.first_name}
            </div>
          </div>

          <div className="row mt-10">
            <div className="col text-align-right text-color-secondary pr-4">
              SURNAME
            </div>
            <div className="col pl-4">
              {user.second_name}
            </div>
          </div>

          <div className="row mt-10">
            <div className="col text-align-right text-color-secondary pr-4">
              NICKNAME
            </div>
            <div className="col pl-4">
              {user.display_name}
            </div>
          </div>

          <div className="row mt-10">
            <div className="col text-align-right text-color-secondary pr-4">
              PHONE
            </div>
            <div className="col pl-4">
              {user.phone}
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
