import React, { FC } from 'react';
import toClassNames from '@utils/toClassNames';

import './input.scss';
import { Props } from './types';

/**
 * Input
 * @param {string} [labelText=''] - label text
 * @param {string} [messageText=''] - help message
 * @param {boolean} [isError=false] - error boolean
 * @param rest - rest params
 * @constructor
 */

const Input: FC<Props> = ({
  labelText = '',
  messageText = '',
  isError = false,
  ...rest
}) => (
  <label // eslint-disable-line jsx-a11y/label-has-associated-control
    className={toClassNames(
      'input', {
        input_error: isError,
        input_required: rest.required,
      },
      rest.className,
    )}
  >
    <span
      className="input__label"
    >
      {labelText}
    </span>
    <input
      id={rest.id}
      type={rest.type || 'text'}
      name={rest.name}
      className="input__field"
      value={rest.value || ''}
      placeholder={rest.placeholder}
      onChange={rest.onChange}
      required={rest.required}
    />
    <span className="input__message">
      {messageText}
    </span>
  </label>
);

export default Input;
