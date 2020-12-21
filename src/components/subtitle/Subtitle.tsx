import React, { FC } from 'react';
import { Props } from './types';

import './subtitle.scss';

const Subtitle: FC<Props> = ({ value = '' }) => (
  <h2 className="subtitle">
    {value}
  </h2>
);

export default Subtitle;
