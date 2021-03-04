import { SignUpRequest, UserRequest } from '@api/types';

// TUseAuth
export type TUseAuth = [
  isLoggedIn: boolean,
  signin: (data: UserRequest) => void,
  signup: (data: SignUpRequest) => void,
  logout: () => void,
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

// loading
export type TUseLoading = {
  showLoading: () => void,
  hideLoading: () => void,
};
