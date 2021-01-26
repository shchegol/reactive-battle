import React, { FC } from 'react';
import toClassNames from '@root/utils/toClassNames';

import './mainTitle.scss';
import { Props } from './types';

const avatarTmpl = require('@root/images/tank.png').default;

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
  imgSrc = avatarTmpl,
  ...rest
}) => (
  <header
    className={toClassNames(
      'main-title',
      rest.className,
    )}
  >
    <img
      src={imgSrc}
      alt={subtitleText}
      className="main-title__img"
    />

    <h1 className="main-title__text">
      {titleText}
    </h1>

    <p className="main-title__subtitle">
      {subtitleText}
    </p>
  </header>
);

export default MainTitle;
