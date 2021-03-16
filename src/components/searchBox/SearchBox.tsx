import React, { FC } from 'react';
import Input from '@components/input';
import { Props } from './types';

/**
 * Search box
 * @param {string} value - input value
 * @param {onchange} onChange - input change event
 * @param {onclick} onClick - button click event
 * @constructor
 */
const SearchBox: FC<Props> = ({
  value = '',
  onChange = () => {},
}) => (
  <form>
    <div className="row">
      <div className="col">
        <Input
          className="search-box__input"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="SEARCH"
        />
      </div>
    </div>
  </form>
);

export default SearchBox;
