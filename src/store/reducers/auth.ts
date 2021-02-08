import { AuthActions } from '@store/actions/auth';
import { AuthAction } from '@store/actions/types';

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  error: '',
};

export function auth(
  state = initialState,
  action: AuthAction,
) {
  switch (action.type) {
    case AuthActions.SIGNUP_REQUEST:
    case AuthActions.SIGNIN_REQUEST:
    case AuthActions.YAAUTH_REQUEST:
      return {
        ...state,
        isLoading: true,
        isLoggedIn: false,
        error: '',
      };
    case AuthActions.SIGNUP_SUCCESS:
    case AuthActions.SIGNIN_SUCCESS:
    case AuthActions.YAAUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        error: '',
      };
    case AuthActions.SIGNUP_FAILURE:
    case AuthActions.SIGNIN_FAILURE:
    case AuthActions.YAAUTH_FAILURE:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        error: action.error,
      };
    case AuthActions.LOGOUT:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        error: '',
      };
    default:
      return state;
  }
}
