import React, { FC } from 'react';
import toClassNames from '@root/utils/toClassNames';

import './input.scss';
import { Props } from './types';

/**
 * Input
 * @prop labelText - label text
 * @prop messageText - help message
 * @prop isError - error boolean
 */

const Input: FC<Props> = ({
  labelText = '',
  messageText = '',
  isError = false,
  ...rest
}) => (
  /* eslint jsx-a11y/label-has-associated-control: ["error", { assert: "either" } ] */
  <label
    className={toClassNames('input', { input_error: isError, input_required: rest.required })}
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
