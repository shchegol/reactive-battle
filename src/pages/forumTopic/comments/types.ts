import { Comment } from '@store/types';

export type Props = {
  topicComments: Comment[];
  parentCommentId: number | null;
};
