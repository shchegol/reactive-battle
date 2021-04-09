import React, {
  useCallback, useEffect,
} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '@store/types';
import Interface from '@pages/game/interface/Interface';
import {
  EngineBus,
  SPRITE_DESTROYED,
  GAME_OVER,
  GAME_WIN,
  LEVEL_WIN,
  PLAYER_DEAD,
} from '@engine/EngineBus';
import Bullet from '@engine/sprites/Bullet';
import EnemyTank from '@engine/sprites/enemies/EnemyTank';
import userSelector from '@store/selectors/user';
import Avatar from '@components/avatar';
import {
  updateScore,
  clearScore,
  updateLevel,
  updateLives,
} from '@root/store/actionsCreators/game';
import LeaderboardAPI from '@api/LeaderboardAPI';

import useSnackbar from '@root/hooks/useSnackbar';
import Player from '@engine/sprites/Player';
import TopMenu from '@components/topMenu';

export default function Game() {
  const dispatch = useDispatch();
  const { login, avatar } = useSelector(userSelector);
  const { showSnackbar } = useSnackbar();
  const game = useSelector((state: ApplicationState) => state.game);

  /**
   * Players shot handler
   * @param {EnemyTank | Bullet} ctx - shot context
   */
  const playerShot = useCallback((ctx?: EnemyTank | Bullet) => {
    if (ctx instanceof EnemyTank) {
      dispatch(updateScore({ tankType: ctx.Type }));
    }
  }, [dispatch]);

  const playerDead = useCallback((ctx?: Player) => {
    if (ctx instanceof Player) {
      dispatch(updateLives({ lives: ctx.Lives }));
    }
  }, [dispatch]);

  const addPlayerScore = useCallback(() => {
    const { score } = game.player;

    if (score < 1) return;

    LeaderboardAPI
      .addNewLeader(score)
      .then(() => {
        dispatch(clearScore());
        showSnackbar('Congratulations, you are on the leaderboard!', 'success');
      });
  }, [game.player]);

  const updateLevelHandler = useCallback(() => {
    dispatch(updateLevel({ level: game.level + 1, enemies: 20 }));
  }, [game.level]);

  useEffect(() => {
    EngineBus.on(SPRITE_DESTROYED, playerShot);

    return () => EngineBus.off(SPRITE_DESTROYED, playerShot);
  }, [playerShot]);

  useEffect(() => {
    EngineBus.on(PLAYER_DEAD, playerDead);

    return () => EngineBus.off(PLAYER_DEAD, playerDead);
  }, [playerDead]);

  useEffect(() => {
    EngineBus.on(GAME_OVER, addPlayerScore);
    EngineBus.on(GAME_WIN, addPlayerScore);
    EngineBus.on(LEVEL_WIN, updateLevelHandler);

    return () => {
      EngineBus.off(GAME_OVER, addPlayerScore);
      EngineBus.off(GAME_WIN, addPlayerScore);
      EngineBus.off(LEVEL_WIN, updateLevelHandler);
    };
  }, [addPlayerScore, updateLevelHandler, game]);

  return (
    <div className="container-fluid pb-60">
      <div className="row align-items-center mt-20">
        <div className="col-auto pr-0">
          <Avatar
            src={avatar}
            size="xs"
          />
        </div>

        <div className="col-auto pl-0">
          <Link
            to={`/users/${login}`}
            className="button button_color_link"
          >
            {`${login}`}
          </Link>
        </div>

        <div className="col-auto pr-0">
          <Link
            to="/leaderboard"
            className="button button_color_link"
          >
            Leaderboard
          </Link>
        </div>

        <div className="col-auto pr-0">
          <Link
            to="/forum"
            className="button button_color_link"
          >
            Forum
          </Link>
        </div>

        <div className="col">
          <TopMenu />
        </div>
      </div>

      <Interface
        enemies={game.enemies}
        player={game.player}
        level={game.level}
      />
    </div>
  );
}
