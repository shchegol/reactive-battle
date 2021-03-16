import { SignUpRequest, UserRequest } from '@api/types';

// useAuth
export interface UseAuth {
  isLoggedIn: boolean;
  signin: (data: UserRequest) => void;
  signup: (data: SignUpRequest) => void;
  logout: () => void;
}

// useSnackbar
export type ShowSnackbar = (
  message: string,
  type?: 'danger' | 'success',
  duration?: number,
) => void;

export interface UseSnackbar {
  showSnackbar: ShowSnackbar;
  hideSnackbar: () => void;
}

// useLoading
export interface UseLoading {
  showLoading: () => void,
  hideLoading: () => void,
}
