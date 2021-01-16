import React, { FC, useState } from 'react';
import LeadersItem from '@components/leadersItem';
import SearchBox from '@components/searchBox';
import { Props } from './types';

/**
 * Leaders table
 * @param {Object[]} [players=[]] = players of the game
 * @param {*} rest - rest params
 * @constructor
 */

const LeadersTable: FC<Props> = ({ players = [], ...rest }) => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className={rest.className}>
      <SearchBox
        value={searchValue}
        onChange={(newValue) => setSearchValue(newValue)}
          // TODO не забыть убрать
        onSearch={() => console.log('search')} // eslint-disable-line no-console
      />

      {players.map((player) => (
        <LeadersItem
          key={player.name}
          player={player}
        />
      ))}
    </div>
  );
};

export default LeadersTable;
