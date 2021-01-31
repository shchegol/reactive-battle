import { AddMessageActionType, AddThreadActionType, ForumActions } from '@store/actions/forum';

export const addThread = (name: string): AddThreadActionType => ({
  type: ForumActions.ADD_THREAD,
  name,
});

export const addMessage = (threadId: number, author: string, text: string): AddMessageActionType => ({
  type: ForumActions.ADD_MESSAGE,
  threadId,
  author,
  text,
});
