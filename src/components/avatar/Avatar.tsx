import React, { FC } from 'react';
import toClassNames from '@utils/toClassNames';
import { API_URL } from '@root/constants';
import { Props } from './types';
import './avatar.scss';

const avatarTmpl = require('@root/images/no-avatar.png').default;

/**
 * Avatar
 * @param {string|null} [src=undefined] - image source url
 * @param {'xs' | 'l' | undefined} [size=undefined] - avatar size
 * @param {function|undefined} [onInputChange=undefined] - file input listener
 * @param {*} rest - rest params
 * @constructor
 */

const Avatar: FC<Props> = ({
  src = avatarTmpl,
  size = undefined,
  onInputChange = undefined,
  ...rest
}) => {
  const avatarUrl = src
    ? new URL(src, API_URL).href
    : undefined;

  return (
    <div
      className={toClassNames(
        'profile-avatar',
        {
          'profile-avatar_size_xs': size === 'xs',
          'profile-avatar_size_l': size === 'l',
        },
        rest.className,
      )}
    >
      {onInputChange && (
        <input
          type="file"
          className="profile-avatar__input"
          onChange={onInputChange}
        />
      )}

      <img
        className="profile-avatar__image"
        src={avatarUrl}
        alt={rest.alt}
      />
    </div>
  );
};

export default Avatar;
