import React from 'react';
import MainTitle from '@root/components/mainTitle';
import Button from '@components/button';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import AuthAPI from '@root/api/AuthAPI';
import { AuthContext } from '@root/context/auth';

/**
 * User profile page
 * @constructor
 */

export default function Profile() {
  const history = useHistory();
  const { url } = useRouteMatch();

  const handleGoBack = () => history.goBack();
  const handleLogout = async () => {
    const response = await AuthAPI.logout();

    if (!response.ok) {
      const json = await response.json();
      // todo переписать на всплывающие уведомления
      console.error(json.reason); // eslint-disable-line no-console
    }
  };

  return (
    <div className="container">
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
          <AuthContext.Consumer>
            {(auth) => (
              <MainTitle
                titleText={`${auth.userId}`}
                subtitleText={`${auth.userId}@gmail.com`}
              />
            )}
          </AuthContext.Consumer>

        </div>
      </div>

      <div className="row justify-content-center mt-60">
        <div className="col-8">
          <div className="row">
            <div className="col text-align-right text-color-secondary pr-4">
              NAME
            </div>
            <div className="col pl-4">
              ALEX
            </div>
          </div>

          <div className="row mt-10">
            <div className="col text-align-right text-color-secondary pr-4">
              SURNAME
            </div>
            <div className="col pl-4">
              FINCHER
            </div>
          </div>

          <div className="row mt-10">
            <div className="col text-align-right text-color-secondary pr-4">
              NICKNAME
            </div>
            <div className="col pl-4">
              KILLER
            </div>
          </div>

          <div className="row mt-10">
            <div className="col text-align-right text-color-secondary pr-4">
              PHONE
            </div>
            <div className="col pl-4">
              +7 (495) 444-66-55
            </div>
          </div>

          <div className="row justify-content-center mt-60">
            <div className="col-4">
              <Link
                to={`${url}/edit`}
                className="button"
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
