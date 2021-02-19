import * as React from 'react';
import { Comment } from '@store/types';

export type TReply = Comment | null;

export type TReplyContext = {
  reply: TReply;
  updateReply: (comment: TReply) => void;
};

export const ReplyContext = React.createContext<TReplyContext | null>(null);

const ReplyProvider: React.FC<React.ReactNode> = ({
  children,
}) => {
  const [reply, setReply] = React.useState<TReply>(null);

  const updateReply = (newReply: TReply) => {
    setReply(newReply);
  };

  return (
    <ReplyContext.Provider value={{ reply, updateReply }}>
      {children}
    </ReplyContext.Provider>
  );
};

export default ReplyProvider;
