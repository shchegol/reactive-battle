import { Comment } from '@store/types';

export type TReply = Comment | null;

export type TReplyContext = {
  reply: TReply;
  updateReply: (comment: TReply) => void;
};
