import { SnackbarActions } from '@store/actions/snackbar';
import { UserActions } from '@store/actions/user';
import { UserResponse } from '@api/types';
import { AuthActions } from '@store/actions/auth';
import { ForumActions } from '@store/actions/forum';
import { Topic } from '@store/types';
import { GameActions } from './game';

export type TPayload<T, P> = {
  type: T;
  payload?: P
};

// Auth
export interface AuthPayload {
  oAuthCode?: string;
  error?: string;
}

export type AuthAction = TPayload<AuthActions, AuthPayload>;

// User
export interface UserPayload {
  info?: UserResponse;
  error?: string;
}

export type UserAction = TPayload<UserActions, UserPayload>;

// Forum
export interface ForumPayload {
  topic?: Topic;
  error?: string;
}

export type ForumAction = TPayload<ForumActions, ForumPayload>;

// Snackbar
export interface SnackbarPayload {
  message: string,
  duration?: number,
  type?: 'danger' | 'success'
}

export type SnackbarAction = TPayload<SnackbarActions, SnackbarPayload>;

// Game
export interface UpdateScoreActionType {
  type: GameActions.UPDATE_SCORE;
}

export type GameAction = UpdateScoreActionType;
