import { UserResponse } from '@api/types';

export interface ApplicationState {
  auth: AuthState;
  user: UserState;
  forum: ForumState;
  snackbar: SnackbarState;
  game: GameState;
}

// Auth
export interface AuthRootState {
  auth: AuthState;
}

export interface AuthState {
  isLoading: boolean,
  isLoggedIn: boolean,
  isOAuth: boolean,
  oAuthCode: string,
  error: string,
}

// User
export interface UserState {
  info: UserResponse,
  error: string,
}

// Leaderboard
export interface Player {
  position: number;
  name: string;
  score: number;
}

// Forum
export interface Message {
  id: number;
  author: string;
  date: Date;
  text: string;
  answers: Message[];
}

export interface Thread {
  id: number;
  name: string;
  messages: Message[];
}

export interface ForumState {
  threads: Thread[];
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
}
