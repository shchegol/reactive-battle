import React, { FC } from 'react';
import { Props } from './types';

import './error5xx.scss';

const Error5xx: FC<Props> = ({ errorCode = 500 }) => (
  <div className="error-5xx">
    <h1 className="error-5xx__title">{`ERROR ${errorCode}`}</h1>
    <div className="error-5xx__subtitle">
      <span>WE`RE ALREADY</span>
      <br />
      <span>EXTINGUISHING</span>
    </div>
  </div>
);

export default Error5xx;
