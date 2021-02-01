import React, { FC } from 'react';
import toClassNames from '@root/utils/toClassNames';
import { Props } from './types';
import './icon.scss';

/**
 * Material Icons
 * Full set on https://material.io/resources/icons
 *
 * @param {string} name - icon name
 * @param {*} rest - rest params
 * @constructor
 */

const Icon: FC<Props> = ({
  // eslint-disable-next-line react/prop-types
  name,
  ...rest
}) => (
  <i
    className={toClassNames(
      'material-icons',
      rest.className,
    )}
  >
    {name}
  </i>
);

export default Icon;
