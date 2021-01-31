import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ApplicationState } from '@store/types';
import Interface from '@pages/game/interface/Interface';
import Button from '@components/button';
import Snackbar from '@components/snackbar/Snackbar';

export default function Game() {
  const login = useSelector((state: ApplicationState) => state.auth.user.login);

  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleShowSnackbar = () => setShowSnackbar(!showSnackbar);

  return (
    <div className="container">
      <Snackbar
        isShow={showSnackbar}
        text="Hello!"
      />

      <div className="row mt-10">
        <div className="col-auto">
          <Link
            to={`/users/${login}`}
            className="button button_color_link"
          >
            {`${login}`}
          </Link>
        </div>

        <div className="col">
          <div className="row justify-content-end">
            <div className="col-auto">
              <Button onClick={handleShowSnackbar}>
                Hello!
              </Button>
            </div>

            <div className="col-auto">
              <Link
                to="/leaderboard"
                className="button button_color_link"
              >
                Leaderboard
              </Link>
            </div>
            <div className="col-auto pl-0">
              <Link
                to="/forum"
                className="button button_color_link"
              >
                Forum
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Interface
        player={{ name: login }}
      />
    </div>
  );
}
