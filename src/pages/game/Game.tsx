import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ApplicationState } from '@store/types';
import Interface from '@pages/game/interface/Interface';
import { EngineBus, SPRITE_DESTROYED } from '@engine/EngineBus';
import BasicTank from '@engine/sprites/enemies/BasicTank';
import Bullet from '@engine/sprites/Bullet';

export default function Game() {
  const login = useSelector((state: ApplicationState) => state.user.info.login);
  const [gameParams, setGameParams] = useState({
    player: {
      name: login || 'PLAYER 1',
      lives: 2,
      score: 0,
      kills: 0,
    },
    enemies: 20,
  });

  const palyerShot = (ctx: BasicTank | Bullet) => {
    if (ctx instanceof BasicTank) {
      setGameParams((oldParams) => ({
        ...oldParams,
        player: {
          ...oldParams.player,
          kills: oldParams.player.kills + 1,
          score: oldParams.player.score + 300,
        },
        enemies: oldParams.enemies - 1,
      }));
    }
  };

  useEffect(() => {
    EngineBus.on(SPRITE_DESTROYED, palyerShot);
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
        enemies={gameParams.enemies}
        player={gameParams.player}
      />
    </div>
  );
}
