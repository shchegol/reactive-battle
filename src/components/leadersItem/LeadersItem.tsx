import React, { FC } from 'react';
import positionColor from './utils/positionColor';

import './leadersItem.scss';
import { Props } from './types';

const LeadersItem: FC<Props> = ({ leader = { position: 0, user: '', score: 0 } }: Props) => (
  <div
    className={`leaders-item leaders-item_color_${positionColor[leader.position - 1] || 'rest'}`}
  >
    <span className="leaders-item__position">{leader.position}</span>
    <span className="leaders-item__user">{leader.user}</span>
    <span className="leaders-item__score">{leader.score}</span>
  </div>
);

export default LeadersItem;
