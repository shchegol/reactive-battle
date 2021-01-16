import React, { FC } from 'react';
import toClassNames from '@root/utils/toClassNames';

import './button.scss';
import { Props } from './types';

/**
 * Button
 * @param {*} [children=undefined] - content inside the button
 * @param {string|undefined} [color=undefined] - button color
 * @param {*} rest - rest params
 * @constructor
 */

const Button: FC<Props> = ({
  children = undefined,
  color = undefined,
  ...rest
}) => (
  <button
      /* eslint-disable-next-line react/button-has-type */
    type={rest.type || 'button'}
    className={toClassNames(
      'button',
      {
        button_color_danger: color === 'danger',
        button_color_success: color === 'success',
        button_color_link: color === 'link',
      },
      rest.className,
    )}
    disabled={rest.disabled}
    onClick={rest.onClick}
  >
    {children}
  </button>
);

export default Button;
