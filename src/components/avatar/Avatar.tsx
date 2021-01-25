import React, { FC } from 'react';
import { Props } from './types';

import './avatar.scss';

const avatarTmpl = require('@root/images/no-avatar.png').default;

/**
 * Avatar
 * @param {string|null} [src=undefined] - image source url
 * @param {function|undefined} [onInputChange=undefined] - file input listener
 * @param {*} rest - rest params
 * @constructor
 */

const Avatar: FC<Props> = ({
  src = avatarTmpl,
  onInputChange = undefined,
  ...rest
}) => (
  <div className="profile-avatar">
    <input
      type="file"
      className="profile-avatar__input"
      onChange={onInputChange}
    />
    <img
      className="profile-avatar__image"
      src={src}
      alt={rest.alt}
    />
  </div>
);

export default Avatar;
