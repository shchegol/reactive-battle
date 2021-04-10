import React, { FC, useEffect, useState } from 'react';
import toClassNames from '@utils/toClassNames';
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
  ...rest
}) => {
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    if (src) {
      setAvatar(src);
    } else {
      // eslint-disable-next-line global-require
      setAvatar(require('@root/images/engine/tanks/player-0.svg').default);
    }
  }, [src]);

  return (
    <div
      className={toClassNames(
        'avatar',
        {
          [`avatar_size_${size}`]: size,
        },
        rest.className,
      )}
    >
      {
        avatar
          ? (
            <img
              className="avatar__image"
              src={avatar}
              alt={rest.alt}
            />
          )
          : (
            <div className="avatar__image" />
          )
      }

    </div>
  );
};

export default Avatar;
