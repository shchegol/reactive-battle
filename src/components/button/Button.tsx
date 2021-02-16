import React, { FC } from 'react';
import toClassNames from '@root/utils/toClassNames';
import './button.scss';
import { Props } from './types';

/**
 * Button
 * @param {*} [children=undefined] - content inside the button
 * @param {'danger'|'success'|'cancel'|'link'|undefined} [color=undefined] - button color
 * @param {'s'|'l'|'xl'|undefined} [size=undefined] - button size
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
        button_color_danger: color === 'danger',
        button_color_success: color === 'success',
        button_color_link: color === 'link',
        button_color_cancel: color === 'cancel',
        button_size_s: size === 's',
        button_size_l: size === 'l',
        button_size_xl: size === 'xl',
        button_width_full: width === 'full',
        button_icon: icon,
      },
      rest.className,
    )}
    title={rest.title}
    disabled={rest.disabled}
    onClick={rest.onClick}
  >
    {children}
  </button>
);

export default Button;
