import { UserResponse } from '@api/types';

export interface ApplicationState {
  auth: AuthState;
  user: UserState;
  forum: ForumState;
  snackbar: SnackbarState;
  game: GameState;
  loading: LoadingState;
}

// Auth
export interface AuthRootState {
  auth: AuthState;
}

export interface AuthState {
  isLoggedIn: boolean,
  isOAuth: boolean,
  oAuthCode: string,
  error: string,
}

// User
export interface UserRootState {
  user: UserState;
}

export interface UserState {
  info: UserResponse,
  error: string,
}

// Leaderboard
export interface Player {
  position: number;
  login: string;
  score: number;
}

// Forum
export interface ForumRootState {
  forum: ForumState;
}

export interface ForumState {
  topics: Topic[];
  error: string;
}

export interface Topic {
  id: number;
  name: string;
  description: string;
  login: string;
  createdAt: string;
  comments: Comment[];
}

export interface Comment {
  id: number;
  topic_id: number;
  comment_id: number | null;
  login: string;
  body: string;
  createdAt: string;
}

export interface Review {
  login: string;
  name: string;
  email: string;
  text: string;
  createdAt: string;
}

/**
 * Snackbar state
 * @param {boolean} isShow - visibility
 * @param {string} message - message text
 * @param {number} duration - duration in seconds
 * @param {'danger' | 'success' | undefined} type - type (color) of snackbar
 */
export interface SnackbarState {
  isShow: boolean,
  message: string,
  duration: number,
  type: 'danger' | 'success' | undefined,
}

export interface PlayerState {
  name: string,
  lives: number,
  score: number,
  kills: number
}

export interface GameState {
  player: PlayerState,
  enemies: number,
  level: number,
}

// loading
export interface LoadingRootState {
  loading: LoadingState;
}

export interface LoadingState {
  isShow: boolean,
}
