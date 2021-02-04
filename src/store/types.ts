import { UserResponse } from '@root/types/models';

export interface Player {
  position: number;
  name: string;
  score: number;
}

export interface Thread {
  id: number;
  name: string;
  messages: Message[];
}

export interface Message {
  id: number;
  author: string;
  date: Date;
  text: string;
}

export interface AuthState {
  isLoading: boolean,
  isLoggedIn: boolean,
  user: UserResponse,
  error: string,
}

export interface UserState {
  id: string;
  avatar?: string;
}

export interface ProfileState {
  user: UserState;
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

export interface ApplicationState {
  auth: AuthState;
  profile: ProfileState;
  forum: ForumState;
  snackbar: SnackbarState;
}
