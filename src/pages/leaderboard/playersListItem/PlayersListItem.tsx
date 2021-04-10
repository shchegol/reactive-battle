import React, { FC } from 'react';
import toClassNames from '@utils/toClassNames';
import Avatar from '@components/avatar';
import { Props } from './types';
import './playersListItem.scss';

/**
 * leaderboard item
 * @param {Object} player - player info
 * @param {Number} [player.position=0] - player position
 * @param {String} [player.name=''] - player name
 * @param {Number} [player.score=0] - player score
 * @constructor
 */
const PlayersListItem: FC<Props> = ({
  player = {
    position: 0, login: '', avatar: '', score: 0,
  },
}: Props) => (
  <li
    className={toClassNames(
      'leaders-item',
      { 'leaders-item_color_first': player.position === 1 },
      { 'leaders-item_color_second': player.position === 2 },
      { 'leaders-item_color_third': player.position === 3 },
    )}
  >
    <div className="leaders-item__position">{player.position}</div>
    <div className="leaders-item__avatar">
      <Avatar
        src={player.avatar}
        size="xs"
      />
    </div>
    <div className="leaders-item__user">{player.login}</div>
    <div className="leaders-item__score">{player.score}</div>
  </li>
);

export default PlayersListItem;
