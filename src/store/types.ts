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

export interface ApplicationState {
  profile: ProfileState;
  forum: ForumState;
  auth: AuthState;
}

export interface ForumState {
  threads: Thread[];
}
