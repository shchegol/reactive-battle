import React, { FC } from 'react';
import MessageItem from '@pages/forumTopic/commentItem';
import { FormattedMessage } from 'react-intl';
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
  <>
    {
      topicComments.length !== 0
        ? (
          <ul className="messages">
            {topicComments
              .filter(((comment) => comment.commentId === parentCommentId))
              .map((comment) => (
                <MessageItem
                  key={comment.id}
                  comment={comment}
                  topicComments={topicComments}
                />
              ))}
          </ul>
        )
        : (
          <div className="text-color-gray-500 text-align-center mt-40">
            <FormattedMessage
              id="page.forum.noCommentMessage"
              defaultMessage="<p>There are no comments here yet</p><p>Be first ;)</p>"
              values={{
                p: (chunks: string) => <p>{chunks}</p>,
              }}
            />
          </div>

        )
    }
  </>
);

export default Comments;
