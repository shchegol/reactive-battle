import React, { FC } from 'react';

import './button.scss';
import { Props } from './types';

const Button: FC<Props> = ({
  children = undefined,
  className = 'button',
  ...otherProps
}) => (
  <button
      /* eslint-disable-next-line react/button-has-type */
    type={otherProps.type}
    className={className}
    onClick={otherProps.onClick}
  >
    {children}
  </button>
);

export default Button;
