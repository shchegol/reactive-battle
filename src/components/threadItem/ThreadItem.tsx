/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC } from 'react';

import { Props } from './types';

import './threadItem.scss';

/**
 * ThreadItem
 * @param {Thread} [thread={}] - one thread item
 * @param {()=>void} [onCLick] - on click action
 * @constructor
 */

const ThreadItem: FC<Props> = ({
  thread = {},
  onClick = () => {},
}) => (
  <button
    type="button"
    className="thread-item"
    role="link"
    onClick={() => onClick()}
  >
    <span>{thread.name}</span>
  </button>
);

export default ThreadItem;
