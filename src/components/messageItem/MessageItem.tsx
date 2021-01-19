/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC } from 'react';
import { Props } from './types';
import './messageItem.scss';

/**
 * MessageItem
 * @param {Object} message - message params
 * @param {string} message.author - message author
 * @param {string} message.date - message date
 * @param {string} message.text - message text
 * @constructor
 */

const MessageItem: FC<Props> = ({ message = {} }) => (
  <article className="message-item">
    <div className="row">
      <div className="col-8">
        <h5 className="text-color-secondary">
          {message.author}
        </h5>
      </div>
      <div className="col-4 text-align-right text-color-gray-500">
        <data className="text-size-s">{message.date?.toLocaleString()}</data>
      </div>
      <div className="col-12">
        <p>{message.text}</p>
      </div>
    </div>
  </article>
);

export default MessageItem;
