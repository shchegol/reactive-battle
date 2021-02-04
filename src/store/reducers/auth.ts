import { AuthActions } from '@store/actions/auth';
import { UserResponse } from '@root/types/models';

const login = typeof window !== 'undefined' && window.localStorage.getItem('userLogin');

const initialState = {
  isLoading: false,
  isLoggedIn: !!login,
  user: {
    login,
  },
  error: '',
};

export function auth(
  state = initialState,
  action: {
    type: string,
    user: UserResponse,
    error: string,
  },
) {
  switch (action.type) {
    case AuthActions.SIGNUP_REQUEST:
    case AuthActions.SIGNIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isLoggedIn: false,
        error: '',
      };
    case AuthActions.SIGNUP_SUCCESS:
    case AuthActions.SIGNIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        error: '',
      };
    case AuthActions.SIGNUP_FAILURE:
    case AuthActions.SIGNIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        error: action.error,
        user: {},
      };
    case AuthActions.LOGOUT:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        user: {},
        error: '',
      };
    case AuthActions.FETCH_SUCCESS:
      return {
        ...state,
        user: action.user,
        error: '',
      };
    case AuthActions.FETCH_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case AuthActions.FETCH_REQUEST:
      return {
        ...state,
        error: '',
      };
    default:
      return state;
  }
}
