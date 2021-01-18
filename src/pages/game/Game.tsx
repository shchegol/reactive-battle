import Playground from '@root/components/playground';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '@root/context/auth';

export default function Game() {
  useEffect(() => {
    document.body.classList.add('bg-color-game');
    return () => document.body.classList.remove('bg-color-game');
  }, []);

  return (
    <div className="container">
      <div className="row mt-10">
        <div className="col-auto">
          <AuthContext.Consumer>
            {(auth) => (
              <Link
                to={`/users/${auth.userId}`}
                className="button button_color_link"
              >
                {`${auth.userId}`}
              </Link>
            )}
          </AuthContext.Consumer>
        </div>

        <div className="col">
          <div className="row justify-content-end">
            <div className="col-auto">
              <Link
                to="/leaderboard"
                className="button button_color_link"
              >
                Leaderboard
              </Link>
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

      <div className="row justify-content-center mt-60">
        <div className="col-auto">
          <Playground />
        </div>
      </div>
    </div>
  );
}
