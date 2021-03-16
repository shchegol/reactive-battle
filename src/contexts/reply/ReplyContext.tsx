import * as React from 'react';
import { TReply, TReplyContext } from '@root/contexts/reply/types';

export const ReplyContext = React.createContext<TReplyContext | null>(null);

export const ReplyProvider: React.FC<React.ReactNode> = ({
  children,
}) => {
  const [reply, setReply] = React.useState<TReply>(null);

  return (
    <ReplyContext.Provider value={{ reply, updateReply: setReply }}>
      {children}
    </ReplyContext.Provider>
  );
};
