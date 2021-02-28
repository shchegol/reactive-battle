import React, {
  useState, useCallback, useEffect, useContext,
} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '@store/types';
import Interface from '@pages/game/interface/Interface';
import { EngineBus, SPRITE_DESTROYED, GAME_OVER } from '@engine/EngineBus';
import Bullet from '@engine/sprites/Bullet';
import Button from '@components/button';
import EnemyTank from '@engine/sprites/enemies/EnemyTank';
import userSelector from '@store/selectors/user';
import Avatar from '@components/avatar';
import Icon from '@components/icon';
import { ThemeContext, TThemeContext } from '@root/contexts/theme';
import { updateScore, clearScore } from '@root/store/actionsCreators/game';
import LeaderboardAPI from '@api/LeaderboardAPI';

export default function Game() {
  const { login, avatar } = useSelector(userSelector);
  const game = useSelector((state: ApplicationState) => state.game);
  const [themeIcon, setThemeIcon] = useState('mode_night');
  const { theme, updateTheme } = useContext(ThemeContext) as TThemeContext;

  const dispatch = useDispatch();

  /**
   * Players shot handler
   * @param {EnemyTank | Bullet} ctx - shot context
   */
  const playerShot = useCallback((ctx?: EnemyTank | Bullet) => {
    if (ctx instanceof EnemyTank) {
      dispatch(updateScore({ tankType: ctx.Type }));
    }
  }, [dispatch]);

  const addPlayerScore = useCallback(() => {
    LeaderboardAPI.addNewLeader({
      data: {
        login,
        score: game.player.score,
      },
      ratingFieldName: 'score',
    }).then(() => dispatch(clearScore()));
  }, [dispatch, game.player, login]);

  const changeThemeHandler = () => {
    updateTheme();
    setThemeIcon(theme === 'dark' ? 'wb_sunny' : 'mode_night');
  };

  useEffect(() => {
    EngineBus.on(SPRITE_DESTROYED, playerShot);

    return () => EngineBus.off(SPRITE_DESTROYED, playerShot);
  }, [playerShot]);

  useEffect(() => {
    EngineBus.on(GAME_OVER, addPlayerScore);

    return () => EngineBus.off(GAME_OVER, addPlayerScore);
  }, [addPlayerScore, game]);

  return (
    <div className="container-fluid">
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

        <div className="col">
          <div className="row justify-content-end align-items-center">
            <div className="col-auto pr-0">
              THEME
            </div>
            <div className="col-auto pl-4">
              <Button
                color="link"
                icon
                onClick={changeThemeHandler}
              >
                <Icon name={themeIcon} />
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
        enemies={game.enemies}
        player={game.player}
      />
    </div>
  );
}
