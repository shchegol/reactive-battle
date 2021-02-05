import { SnackbarActions } from '@store/actions/snackbar';
import { UserActions } from '@store/actions/user';
import { UserResponse } from '@api/types';
import { AuthActions } from '@store/actions/auth';
import { ForumActions } from '@store/actions/forum';

export type TPayload<T, P> = {
  type: T;
  payload?: P
};

// Auth
export interface AuthAction {
  type: AuthActions;
  error?: string;
}

// User
export interface UserPayload {
  info?: UserResponse;
  error?: string;
}

export type UserAction = TPayload<UserActions, UserPayload>;

// Forum
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

// Snackbar
export interface SnackbarPayload {
  message: string,
  duration?: number,
  type?: 'danger' | 'success'
}

export type SnackbarAction = TPayload<SnackbarActions, SnackbarPayload>;
