import React from 'react';
import Playground from '@root/components/playground';

import './game-interface.scss';

export default function GameInterface() {
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
                  <tr>
                    <td>ZELENZOOM</td>
                    <td className="text-align-right text-color-secondary pl-10">2</td>
                  </tr>

                  <tr>
                    <td>SCORE</td>
                    <td className="text-align-right text-color-secondary pl-10">10000</td>
                  </tr>

                  <tr>
                    <td>KILLS</td>
                    <td className="text-align-right text-color-secondary pl-10">50</td>
                  </tr>
                </table>
              </div>
            </div>

            <div className="row mt-20">
              <div className="col">
                <p>ENEMIES</p>
                <div className="enemy-icons">
                  <div className="enemy-icons__icon" />
                  <div className="enemy-icons__icon" />
                  <div className="enemy-icons__icon" />
                  <div className="enemy-icons__icon" />
                  <div className="enemy-icons__icon" />
                  <div className="enemy-icons__icon" />
                  <div className="enemy-icons__icon" />
                  <div className="enemy-icons__icon" />
                  <div className="enemy-icons__icon" />
                  <div className="enemy-icons__icon" />

                  <div className="enemy-icons__icon" />
                  <div className="enemy-icons__icon" />
                  <div className="enemy-icons__icon" />
                  <div className="enemy-icons__icon" />
                  <div className="enemy-icons__icon" />
                  <div className="enemy-icons__icon" />
                  <div className="enemy-icons__icon" />
                  <div className="enemy-icons__icon" />
                  <div className="enemy-icons__icon" />
                  <div className="enemy-icons__icon" />
                </div>
              </div>
            </div>

            <div className="row mt-20">
              <div className="col">
                <table className="player-info">
                  <tr>
                    <td>LEVEL</td>
                    <td className="text-align-right text-color-secondary pl-10">20</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
