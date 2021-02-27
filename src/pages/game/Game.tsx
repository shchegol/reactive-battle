import React, { useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '@store/types';
import Interface from '@pages/game/interface/Interface';
import { EngineBus, SPRITE_DESTROYED, GAME_OVER } from '@engine/EngineBus';
import Bullet from '@engine/sprites/Bullet';
import EnemyTank from '@engine/sprites/enemies/EnemyTank';
import { updateScore, clearScore } from '@root/store/actionsCreators/game';
import LeaderboardAPI from '@api/LeaderboardAPI';

export default function Game() {
  const login = useSelector((state: ApplicationState) => state.user.info.login);
  const game = useSelector((state: ApplicationState) => state.game);
  const dispatch = useDispatch();

  const playerShot = (ctx: EnemyTank | Bullet) => {
    if (ctx instanceof EnemyTank) {
      dispatch(updateScore({ tankType: ctx.Type }));
    }
  };

  const addPlayerScore = useCallback(() => {
    console.log('1', login, game.player);

    LeaderboardAPI.addNewLeader({
      data: {
        login,
        score: game.player.score,
      },
      ratingFieldName: 'score',
    }).then(() => dispatch(clearScore()));
  }, [dispatch, game.player, login]);

  useEffect(() => {
    EngineBus.on(SPRITE_DESTROYED, playerShot);

    return () => EngineBus.off(SPRITE_DESTROYED, playerShot);
  }, [playerShot]);

  useEffect(() => {
    EngineBus.on(GAME_OVER, addPlayerScore);

    return () => EngineBus.off(GAME_OVER, addPlayerScore);
  }, [addPlayerScore, game]);

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
