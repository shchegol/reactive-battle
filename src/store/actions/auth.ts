import { UserResponse } from '@root/types/models';

export enum AuthActions {
  SIGNUP_REQUEST = 'AUTH/SIGNUP_REQUEST',
  SIGNUP_SUCCESS = 'AUTH/SIGNUP_SUCCESS',
  SIGNUP_FAILURE = 'AUTH/SIGNUP_FAILURE',

  SIGNIN_REQUEST = 'AUTH/SIGNIN_REQUEST',
  SIGNIN_SUCCESS = 'AUTH/SIGNIN_SUCCESS',
  SIGNIN_FAILURE = 'AUTH/SIGNIN_FAILURE',

  FETCH_REQUEST = 'AUTH/FETCH_REQUEST',
  FETCH_SUCCESS = 'AUTH/FETCH_SUCCESS',
  FETCH_FAILURE = 'AUTH/FETCH_FAILURE',

  LOGOUT = 'AUTH/LOGOUT',
}

interface AuthAction {
  type: AuthActions;
  user?: UserResponse;
  error?: string;
}

export type AuthActionTypes = AuthAction;
