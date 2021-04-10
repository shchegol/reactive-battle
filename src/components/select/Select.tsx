import React, { FC } from 'react';
import toClassNames from '@utils/toClassNames';
import './select.scss';
import { Props } from './types';

/**
 * Select
 * @param {Option[]} options - option params
 * @param {Select} rest - select params
 * @constructor
 */

const Select: FC<Props> = ({
  options,
  ...rest
}) => (
  <select
    className={toClassNames(
      'select',
      rest.className,
    )}
    disabled={rest.disabled}
    form={rest.form}
    multiple={rest.multiple}
    name={rest.name}
    required={rest.required}
    size={rest.size}
    value={rest.value}
    onChange={rest.onChange}
  >
    {
        options.map((option) => (
          <option
            key={option.value as string}
            disabled={option.disabled}
            label={option.label}
            selected={option.selected}
            value={option.value}
          >
            {option.text}
          </option>
        ))
    }
  </select>
);

export default Select;
