import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '@store/types';
import Interface from '@pages/game/interface/Interface';
import { EngineBus, SPRITE_DESTROYED } from '@engine/EngineBus';
import BasicTank from '@engine/sprites/enemies/BasicTank';
import Bullet from '@engine/sprites/Bullet';
import Button from '@components/button';
import EnemyTank from '@engine/sprites/enemies/EnemyTank';
import { updateScore } from '@root/store/actionsCreators/game';
import userSelector from '@store/selectors/user';
import Avatar from '@components/avatar';
import Icon from '@components/icon';
import { ThemeContext, TThemeContext } from '@root/contexts/theme';

export default function Game() {
  const { login, avatar } = useSelector(userSelector);
  const game = useSelector((state: ApplicationState) => state.game);
  const [themeIcon, setThemeIcon] = useState('mode_night');
  const { theme, updateTheme } = useContext(ThemeContext) as TThemeContext;

  const dispatch = useDispatch();

  const playerShot = (ctx: BasicTank | Bullet) => {
    if (ctx instanceof EnemyTank) {
      dispatch(updateScore());
    }
  };

  const changeThemeHandler = () => {
    updateTheme();
    setThemeIcon(theme === 'dark' ? 'mode_night' : 'wb_sunny');
  };

  useEffect(() => {
    EngineBus.on(SPRITE_DESTROYED, playerShot);
  }, []);

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
