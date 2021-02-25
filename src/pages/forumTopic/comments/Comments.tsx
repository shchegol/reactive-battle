import React, { FC } from 'react';
import MessageItem from '@pages/forumTopic/commentItem';
import { Props } from './types';

import './comments.scss';

/**
 * Messages
 * @param {Comment[]} [topicComments=[]] - All comments for topic
 * @param {number | null} [parentCommentId=null] - Parent comment or null for root comments
 * @constructor
 */

const Comments: FC<Props> = (
  { topicComments = [], parentCommentId = null },
) => (
  <ul className="messages">
    {topicComments
      .filter(((comment) => comment.comment_id === parentCommentId))
      .map((comment) => (
        <MessageItem
          key={comment.id}
          comment={comment}
          topicComments={topicComments}
        />
      ))}
  </ul>
);

export default Comments;
