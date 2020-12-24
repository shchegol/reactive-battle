import React, { FC, useState } from 'react';
import LeadersItem from '@components/leadersItem';
import SearchBox from '@components/searchBox';

import './leadersTable.scss';
import { Props } from './types';

const LeadersTable: FC<Props> = ({ leaders = [], ...otherProps }) => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className={otherProps.className}>
      <SearchBox
        value={searchValue}
        onChange={(newValue) => setSearchValue(newValue)}
        onSearch={() => console.log('search')}
      />
      <div>
        {leaders.map((leader) => (
          <LeadersItem
            key={leader.user}
            leader={leader}
          />
        ))}
      </div>
    </div>
  );
};

export default LeadersTable;
