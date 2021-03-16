import React, { FC } from 'react';
import toClassNames from '@utils/toClassNames';
import './button.scss';
import { Props } from './types';

/**
 * Button
 * @param {*} [children=undefined] - content inside the button
 * @param {'danger'|'success'|'cancel'|'link'|undefined} [color=undefined] - button color
 * @param {'s'|'l'|'xl'|'icon'|undefined} [size=undefined] - button size
 * @param {'full'} [width=undefined] - button width
 * @param {boolean} [icon=false] - button with icon
 * @param {*} rest - rest params
 * @constructor
 */

const Button: FC<Props> = ({
  children = undefined,
  color = undefined,
  size = undefined,
  width = undefined,
  icon = false,
  ...rest
}) => (
  <button
      /* eslint-disable-next-line react/button-has-type */
    type={rest.type || 'button'}
    className={toClassNames(
      'button',
      {
        [`button_color_${color}`]: color,
        [`button_size_${size}`]: size,
        [`button_width_${width}`]: width,
        button_icon: icon,
      },
      rest.className,
    )}
    title={rest.title}
    disabled={rest.disabled}
    onClick={rest.onClick}
    onMouseEnter={rest.onMouseEnter}
    onMouseLeave={rest.onMouseLeave}
  >
    {children}
  </button>
);

export default Button;
