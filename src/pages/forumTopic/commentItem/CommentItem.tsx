import React, { FC, useContext } from 'react';
import { Comment } from '@store/types';
import Comments from '@pages/forumTopic/comments';
import Button from '@components/button';
import Icon from '@components/icon';
import { ReplyContext, TReplyContext, TReply } from '@pages/forumTopic/ReplyContext';
import { Props } from './types';
import './commentItem.scss';

/**
 * Comment Item
 * @param {Object} comment - comment params
 * @param {string} comment.author - comment author
 * @param {string} comment.created_at - comment date
 * @param {string} comment.body - comment text
 * @param {Comment[]} topicComments - All comments for topic
 * @constructor
 */
const CommentItem: FC<Props> = ({
  comment = {} as Comment,
  topicComments = [],
}) => {
  const { updateReply } = useContext(ReplyContext) as TReplyContext;

  return (
    <li className="comment-item">
      <div className="row align-items-center">
        <div className="col">
          <h5 className="text-color-secondary">
            {comment.author}
          </h5>
        </div>

        <div className="col-auto pr-0">
          <Button
            color="link"
            size="s"
            onClick={() => updateReply(comment as TReply)}
          >
            <Icon name="reply" />
            &nbsp;Reply
          </Button>
        </div>

        <div className="col-auto text-align-right text-color-gray-500">
          <data className="text-size-s">
            {comment.created_at?.toLocaleString()}
          </data>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <p>{comment.body}</p>
        </div>
      </div>

      <Comments
        topicComments={topicComments}
        parentCommentId={comment.id}
      />
    </li>
  );
};

export default CommentItem;
