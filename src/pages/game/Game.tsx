import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '@store/types';
import Interface from '@pages/game/interface/Interface';
import { EngineBus, SPRITE_DESTROYED } from '@engine/EngineBus';
import BasicTank from '@engine/sprites/enemies/BasicTank';
import Bullet from '@engine/sprites/Bullet';
import EnemyTank from '@engine/sprites/enemies/EnemyTank';
import { udpateScore } from '@root/store/actionsCreators/game';

export default function Game() {
  const login = useSelector((state: ApplicationState) => state.user.info.login);
  const game = useSelector((state: ApplicationState) => state.game);

  const dispatch = useDispatch();

  const playerShot = (ctx: BasicTank | Bullet) => {
    if (ctx instanceof EnemyTank) {
      dispatch(udpateScore());
    }
  };

  useEffect(() => {
    EngineBus.on(SPRITE_DESTROYED, playerShot);
  }, []);

  return (
    <div className="container">
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
        enemies={game.enemies}
        player={game.player}
      />
    </div>
  );
}
