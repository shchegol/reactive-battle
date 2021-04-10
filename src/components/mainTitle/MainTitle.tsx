import React, {
  FC, useCallback, useEffect, useState,
} from 'react';
import toClassNames from '@utils/toClassNames';
import './mainTitle.scss';
import { Props } from './types';

/**
 * Main title
 * @param {string} [titleText='REACTIVE BATTLE'] - title text
 * @param {string} [subtitleText=''] - subtitle text
 * @param [imgSrc=logo] - img file
 * @param [hasImg=true] - need for a picture
 * @param {*} rest - rest parameters
 * @constructor
 */

const MainTitle: FC<Props> = ({
  titleText = 'REACTIVE BATTLE',
  subtitleText = '',
  imgSrc = undefined,
  hasImg = true,
  ...rest
}) => {
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    if (imgSrc) {
      setAvatar(imgSrc);
    } else {
      // eslint-disable-next-line global-require
      setAvatar(require('@root/images/engine/tanks/player-0.svg').default);
    }
  }, []);

  const renderAvatar = useCallback(() => {
    if (!hasImg) return null;

    if (avatar) {
      return (
        <img
          src={avatar}
          alt={subtitleText}
          className="main-title__img"
        />

      );
    }

    return <div className="main-title__img" />;
  }, [avatar, hasImg, subtitleText]);

  return (
    <header
      className={toClassNames(
        'main-title',
        rest.className,
      )}
    >
      {
        renderAvatar()
      }

      <h1 className="main-title__text">
        {titleText}
      </h1>

      <p className="main-title__subtitle">
        {subtitleText}
      </p>
    </header>
  );
};

export default MainTitle;
