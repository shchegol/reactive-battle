import React, { FC, useEffect, useState } from 'react';
import toClassNames from '@utils/toClassNames';
import { API_YANDEX_URL } from '@root/constants';
import { Props } from './types';
import './avatar.scss';

/**
 * Avatar
 * @param {string|null} [src=undefined] - image source url
 * @param {'xs' | 'l' | undefined} [size=undefined] - avatar size
 * @param {function|undefined} [onInputChange=undefined] - file input listener
 * @param {*} rest - rest params
 * @constructor
 */

const Avatar: FC<Props> = ({
  src = undefined,
  size = undefined,
  onInputChange = undefined,
  ...rest
}) => {
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    if (src) {
      setAvatar(new URL(src, API_YANDEX_URL).href);
    } else {
      // eslint-disable-next-line global-require
      setAvatar(require('@root/images/engine/tanks/player-0.svg').default);
    }
  }, [src]);

  return (
    <div
      className={toClassNames(
        'profile-avatar',
        {
          [`profile-avatar_size_${size}`]: size,
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

      {
        avatar
          ? (
            <img
              className="profile-avatar__image"
              src={avatar}
              alt={rest.alt}
            />

          )
          : (
            <div className="profile-avatar__image" />
          )
      }

    </div>
  );
};

export default Avatar;
