import React, { FC } from 'react';
import PlayersListItem from '@pages/leaderboard/playersListItem';
import toClassNames from '@utils/toClassNames';
import { Props } from './types';
import './playersList.scss';
/**
 * Leaders table
 * @param {Object[]} [players=[]] = players of the game
 * @param {*} rest - rest params
 * @constructor
 */

const PlayersList: FC<Props> = ({
  players = [],
  ...rest
}) => (
  <ul
    className={toClassNames(
      'leaders-list',
      rest.className,
    )}
  >
    {players.map((player) => (
      <PlayersListItem
        key={player.position}
        player={player}
      />
    ))}
  </ul>
);

export default PlayersList;
