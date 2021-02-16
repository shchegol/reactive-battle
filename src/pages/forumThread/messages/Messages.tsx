import React, { FC } from 'react';
import MessageItem from '@pages/forumThread/messageItem';
import { Props } from './types';

/**
 * Messages
 * @param {Message[]} [messages=[]] - threads
 * @constructor
 */

const Messages: FC<Props> = ({ messages = [] }) => (
  <ul>
    {messages.map((message) => (
      <MessageItem
        key={message.id}
        message={message}
      />
    ))}
  </ul>
);

export default Messages;
