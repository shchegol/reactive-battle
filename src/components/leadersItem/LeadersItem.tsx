import React, { FC } from 'react';
import positionColor from './utils/positionColor';

import './leadersItem.scss';
import { Props } from './types';

const LeadersItem: FC<Props> = ({ leader = { position: 0, user: '', score: 0 } }: Props) => (
  <div className="leaders-item" style={{ borderColor: positionColor(leader.position) }}>
    <span className="position">{leader.position}</span>
    <span className="user">{leader.user}</span>
    <span className="score">{leader.score}</span>
  </div>
);

export default LeadersItem;
