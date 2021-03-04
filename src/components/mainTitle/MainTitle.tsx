import React, { FC, useEffect, useState } from 'react';
import toClassNames from '@root/utils/toClassNames';
import './mainTitle.scss';
import { API_YANDEX_URL } from '@root/constants';
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
      setAvatar(new URL(imgSrc, API_YANDEX_URL).href);
    } else {
      // eslint-disable-next-line global-require
      setAvatar(require('@root/images/engine/tanks/player-0.svg').default);
    }
  }, [imgSrc]);

  const renderAvatar = () => {
    if (hasImg) {
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
    }

    return null;
  };

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
