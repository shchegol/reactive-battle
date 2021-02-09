import { SignUpRequest, UserRequest } from '@api/types';

// TUseAuth
export type TUseAuth = [
  boolean,
  (data: UserRequest) => void,
  (data: SignUpRequest) => void,
  () => void,
];

// useSnackbar
export type TShowSnackbar = (
  message: string,
  type?: 'danger' | 'success',
  duration?: number,
) => void;

export type TUseSnackbar = [
  TShowSnackbar,
  () => void,
];
