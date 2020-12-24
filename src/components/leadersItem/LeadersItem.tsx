import React, { FC } from 'react';

import './leadersItem.scss';
import { Props } from './types';

const getTopPlacesColor = (position: number): string => {
  const colors = [null, 'first', 'second', 'third'];

  if (position > 0 && position < 4) {
    return ` leaders-item_color_${colors[position]}`;
  }

  return '';
};

const LeadersItem: FC<Props> = ({ leader = { position: 0, user: '', score: 0 } }: Props) => (
  <div
    className={`leaders-item${getTopPlacesColor(leader.position)}`}
  >
    <span className="leaders-item__position">{leader.position}</span>
    <span className="leaders-item__user">{leader.user}</span>
    <span className="leaders-item__score">{leader.score}</span>
  </div>
);

export default LeadersItem;
