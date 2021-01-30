import React, { FC } from 'react';
import Playground from '@pages/game/playground';
import { Props } from '@pages/game/interface/types';
import './interface.scss';

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
  // default player options
  const playerInfo = {
    name: 'PLAYER 1',
    lives: 2,
    score: 0,
    kills: 0,
    ...player,
  };

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

  return (
    <div className="row justify-content-center mt-40">
      <div className="col-auto">
        <div className="game-interface">
          <div className="game-interface__playground">
            <Playground />
          </div>

          <div className="game-interface__info">
            <div className="row">
              <div className="col col-lg-12">
                <table className="player-info">
                  <tbody>
                    <tr>
                      <td>
                        {playerInfo.name}
                      </td>
                      <td className="text-align-right text-color-secondary pl-10">
                        {playerInfo.lives}
                      </td>
                    </tr>

                    <tr>
                      <td>SCORE</td>
                      <td className="text-align-right text-color-secondary pl-10">
                        {playerInfo.score}
                      </td>
                    </tr>

                    <tr>
                      <td>KILLS</td>
                      <td className="text-align-right text-color-secondary pl-10">
                        {playerInfo.kills}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="row mt-20">
              <div className="col">
                <p>ENEMIES</p>
                <div className="enemy-icons">
                  {renderEnemies(enemies)}
                </div>
              </div>
            </div>

            <div className="row mt-20">
              <div className="col">
                <table className="player-info">
                  <tbody>
                    <tr>
                      <td>LEVEL</td>
                      <td className="text-align-right text-color-secondary pl-10">
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
