import React, {
  FC, useEffect, useRef, useState,
} from 'react';
import Playground from '@pages/game/playground';
import { Props } from '@pages/game/interface/types';
import './interface.scss';
import Button from '@components/button';
import Icon from '@components/icon';
import { activateFullscreen, deactivateFullscreen } from '@utils/fullscreen';
import { CANVAS_HEIGHT, CANVAS_WIDTH } from '@engine/Scene';
import { GameStates } from '@engine/types/GameStates';
import {
  EngineBus, GAME_OVER, GAME_PAUSE, GAME_RESUME, GAME_START,
} from '@engine/EngineBus';

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
  const [gameState, setGameState] = useState<GameStates>(GameStates.NotStarted);

  useEffect(() => {
    EngineBus.on(GAME_START, () => setGameState(GameStates.Play));
    EngineBus.on(GAME_PAUSE, () => setGameState(GameStates.Pause));
    EngineBus.on(GAME_RESUME, () => setGameState(GameStates.Play));
    EngineBus.on(GAME_OVER, () => setGameState(GameStates.GameOver));
  }, []);

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

  const renderPlayground = () => {
    switch (gameState) {
      case GameStates.Play:
      case GameStates.Pause:
        return <Playground state={gameState} />;

      case GameStates.GameOver:
        return <Button onClick={() => setGameState(GameStates.Play)}>PLAY AGAIN!</Button>;

      case GameStates.NotStarted:
      default:
        return <Button onClick={() => setGameState(GameStates.Play)}>PLAY!</Button>;
    }
  };

  const renderPauseButton = () => {
    let caption = '';
    let newState: GameStates;

    switch (gameState) {
      case GameStates.Pause:
        caption = 'RESUME';
        newState = GameStates.Play;
        break;

      case GameStates.Play:
        caption = 'PAUSE';
        newState = GameStates.Pause;
        break;

      default:
        break;
    }

    return (
      <Button
        className="game-interface__pause-btn"
        color="link"
        onClick={() => setGameState(newState)}
      >
        {caption}
      </Button>
    );
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

            {renderPauseButton()}
          </div>

          <div className="game-interface__main">
            <div
              className="game-interface__playground"
              style={{ minWidth: CANVAS_WIDTH, minHeight: CANVAS_HEIGHT }}
            >
              {renderPlayground()}
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
