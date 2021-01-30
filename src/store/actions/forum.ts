export enum ForumActions {
  ADD_THREAD = 'FORUM/ADD_THREAD',
  ADD_MESSAGE = 'FORUM/ADD_MESSAGE',
}

export interface AddThreadActionType {
  type: ForumActions.ADD_THREAD;
  name: string;
}

export interface AddMessageActionType {
  type: ForumActions.ADD_MESSAGE;
  threadId: number;
  author: string;
  text: string;
}

export type ForumActionTypes = AddThreadActionType | AddMessageActionType;
