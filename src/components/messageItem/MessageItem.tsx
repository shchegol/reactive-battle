/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC } from 'react';

import { Props } from './types';

/**
 * MessageItem
 * @param {Thread} [thread={}] - one thread item
 * @param {()=>void} [onCLick] - on click action
 * @constructor
 */

const MessageItem: FC<Props> = ({ message = {} }) => (
  <div>
    <div className="row mt-20">
      <div className="col text-align-left text-color-secondary">
        <span>{message.author}</span>
      </div>
      <div className="col text-align-left text-color-gray-500">
        <span>{message.date?.toLocaleString()}</span>
      </div>
    </div>
    <span>{message.text}</span>
  </div>
);

export default MessageItem;
