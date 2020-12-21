import React, { FC } from 'react';
import Button from '@components/button';
import { Props } from './types';

import './searchBox.scss';

const SearchBox: FC<Props> = ({ value = '', onChange = () => {}, onSearch: onClick = () => {} }) => (
  <form>
    <div className="search-box">
      <input
        className="input search-box__input"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="NAME"
      />
      <Button className="button search-box__button" onClick={() => onClick()}>SEARCH</Button>
    </div>
  </form>
);

export default SearchBox;
