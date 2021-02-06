import React, {
  FC, useRef, useState,
} from 'react';
import Playground from '@pages/game/playground';
import { Props } from '@pages/game/interface/types';
import './interface.scss';
import Button from '@components/button';
import Icon from '@components/icon';
import { activateFullscreen, deactivateFullscreen } from '@utils/fullscreen';

/**
 * @param {number} [enemies=20] - number of enemies
 * @param {object} player - player info
 * @param {object} [player.name="PLAYER 1"] - player info
 * @param {object} [player.lives=2] - number of lives
 * @param {object} [player.score=0] - number of points
 * @param {object} [player.kills=0] - number of killed players
 * @param {number} [level=0] - current level
 * @constructor
 */

const Interface: FC<Props> = ({
  player = {},
  enemies = 20,
  level = 1,
}) => {
  const gameWindow = useRef<HTMLDivElement>(null);
  const [fullScreenBtnIcon, setFullScreenBtnIcon] = useState('fullscreen');

  const renderEnemies = (enemiesNumber: number) => {
    const content = [];
    let i = enemiesNumber;

    while (i) {
      content.push(<div
        key={i}
        className="enemy-icons__icon"
      />);
      i -= 1;
    }

    return content;
  };

  const handleFullScreen = () => {
    if (document.fullscreenElement || document.webkitFullscreenElement) {
      deactivateFullscreen();
      setFullScreenBtnIcon('fullscreen');
    } else {
      activateFullscreen(gameWindow.current)
        ?.then(() => {
          setFullScreenBtnIcon('fullscreen_exit');
        })
        .catch((err: Error) => {
          // todo заменить на всплывающее уведомление
          // eslint-disable-next-line no-console
          console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        });
    }
  };

  return (
    <div className="row justify-content-center mt-40">
      <div className="col-auto">
        <div
          className="game-interface"
          ref={gameWindow}
        >
          <div className="game-interface__settings">
            <Button
              color="link"
              title="Full Screen"
              onClick={handleFullScreen}
              icon
            >
              <Icon name={fullScreenBtnIcon} />
            </Button>
          </div>

          <div className="game-interface__main">
            <div className="game-interface__playground">
              <Playground />
            </div>

            <div className="game-interface__info">
              <div>
                <table className="player-info">
                  <tbody>
                    <tr>
                      <td>
                        {player.name}
                      </td>
                      <td className="player-info__col-2">
                        {player.lives}
                      </td>
                    </tr>

                    <tr>
                      <td>SCORE</td>
                      <td className="player-info__col-2">
                        {player.score}
                      </td>
                    </tr>

                    <tr>
                      <td>KILLS</td>
                      <td className="player-info__col-2">
                        {player.kills}
                      </td>
                    </tr>
                  </tbody>
                </table>

                <p className="mt-20">ENEMIES</p>
                <div className="enemy-icons">
                  {renderEnemies(enemies)}
                </div>
              </div>

              <div className="mt-20">
                <table className="player-info">
                  <tbody>
                    <tr>
                      <td>LEVEL</td>
                      <td className="player-info__col-2">
                        {level}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interface;
