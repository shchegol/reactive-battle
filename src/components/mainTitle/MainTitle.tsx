import React, { FC } from 'react';
import toClassNames from '@root/utils/toClassNames';

import './mainTitle.scss';
import { Props } from './types';

/**
 * Main title
 * @param {string} [titleText='REACTIVE BATTLE'] - title text
 * @param {string} [subtitleText=''] - subtitle text
 * @param [imgSrc=logo] - img file
 * @param {*} rest - rest parameters
 * @constructor
 */

const MainTitle: FC<Props> = ({
  titleText = 'REACTIVE BATTLE',
  subtitleText = '',
  imgSrc = undefined,
  ...rest
}) => (
  <div
    className={toClassNames(
      'main-title',
      rest.className,
    )}
  >
    {imgSrc
      ? (
        <img
          src={imgSrc}
          alt={subtitleText}
          className="main-title__img"
        />
      ) : null}

    <h1 className="main-title__text">
      {titleText}
    </h1>

    <p className="main-title__subtitle">
      {subtitleText}
    </p>
  </div>
);

export default MainTitle;
