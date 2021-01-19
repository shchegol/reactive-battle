import React, { FC } from 'react';
import Input from '@components/input';
import Button from '@components/button';
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
  onSearch: onClick = () => {},
}) => (
  <form>
    <div className="row">
      <div className="col-8 pr-4">
        <Input
          className="search-box__input"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="NAME"
        />
      </div>
      <div className="col-4 pl-0">
        <Button
          onClick={() => onClick()}
          width="full"
        >
          SEARCH
        </Button>
      </div>
    </div>
  </form>
);

export default SearchBox;
