import React, { FC } from 'react';
import MessageItem from '@pages/forumTopic/commentItem';
import { Props } from './types';

import './comments.scss';

/**
 * Messages
 * @param {Comment[]} [comments=[]] - comments
 * @constructor
 */

const Comments: FC<Props> = (
  { comments = [] },
) => (
  <ul className="messages">
    {comments.map((comment) => (
      <MessageItem
        key={comment.id}
        comment={comment}
      />
    ))}
  </ul>
);

export default Comments;
