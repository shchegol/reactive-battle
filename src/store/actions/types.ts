import { SnackbarActions } from '@store/actions/snackbar';
import { UserActions } from '@store/actions/user';
import { UserResponse } from '@api/types';
import { AuthActions } from '@store/actions/auth';
import { ForumActions } from '@store/actions/forum';
import { Comment, Topic, Review } from '@store/types';
import { FeedbackActions } from '@store/actions/feedback';
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
  topics?: Topic[];
  topic?: Topic;
  comment?: Comment;
  error?: string;
}

export type ForumAction = TPayload<ForumActions, ForumPayload>;

// Feedback
export interface FeedbackPayload {
  review?: Review;
  error?: string;
}

export type FeedbackAction = TPayload<FeedbackActions, FeedbackPayload>;

// Snackbar
export interface SnackbarPayload {
  message: string,
  duration?: number,
  type?: 'danger' | 'success'
}

export type SnackbarAction = TPayload<SnackbarActions, SnackbarPayload>;

// Game
export type TankTypes = 'basic' | 'fast' | 'armor' | 'power';

export interface GamePayload {
  tankType: TankTypes
}

export type GameAction = Required<TPayload<GameActions, GamePayload>>;
