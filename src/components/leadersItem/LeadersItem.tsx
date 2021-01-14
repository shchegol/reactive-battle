import React, { FC } from 'react';

import './leadersItem.scss';
import toClassNames from '@root/utils/toClassNames';
import { Props } from './types';

const getTopPlacesColor = (position: number): string => {
  const colors = [null, 'first', 'second', 'third'];

  if (position > 0 && position < 4) {
    return `leaders-item_color_${colors[position]}`;
  }

  return '';
};

/**
 * leaderboard item
 * @param {Object} player - player info
 * @param {Number} [player.position=0] - player position
 * @param {String} [player.name=''] - player name
 * @param {Number} [player.score=0] - player score
 * @constructor
 */

const LeadersItem: FC<Props> = ({ player = { position: 0, name: '', score: 0 } }: Props) => (
  <div
    className={toClassNames(
      'leaders-item',
      getTopPlacesColor(player.position),
    )}
  >
    <span className="leaders-item__position">{player.position}</span>
    <span className="leaders-item__user">{player.name}</span>
    <span className="leaders-item__score">{player.score}</span>
  </div>
);

export default LeadersItem;
