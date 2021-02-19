/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC } from 'react';
import { Props } from './types';

import './topicItem.scss';

/**
 * ThreadItem
 * @param {Topic} [topic={}] - one topic item
 * @param {()=>void} [onCLick] - on click action
 * @constructor
 */

const TopicItem: FC<Props> = ({
  topic = {},
  onClick = () => {},
}) => (
  <button
    type="button"
    className="topic-item"
    role="link"
    onClick={() => onClick()}
  >
    <span>{topic.name}</span>
  </button>
);

export default TopicItem;
