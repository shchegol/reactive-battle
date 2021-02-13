import { AuthActions } from '@store/actions/auth';
import { AuthAction } from '@store/actions/types';

const initialState = {
  isLoggedIn: false,
  isOAuth: false,
  isLoading: false,
  oAuthCode: '',
  error: '',
};

export function auth(
  state = initialState,
  action: AuthAction,
) {
  switch (action.type) {
    case AuthActions.SIGNUP_REQUEST:
    case AuthActions.SIGNIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isLoggedIn: false,
        isOAuth: false,
        oAuthCode: '',
        error: '',
      };
    case AuthActions.YAAUTH_REQUEST:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        isOAuth: false,
        oAuthCode: action.payload?.oAuthCode,
        error: '',
      };
    case AuthActions.SIGNUP_SUCCESS:
    case AuthActions.SIGNIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        isOAuth: false,
        oAuthCode: '',
        error: '',
      };
    case AuthActions.YAAUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        isOAuth: true,
        oAuthCode: '',
        error: '',
      };
    case AuthActions.SIGNUP_FAILURE:
    case AuthActions.SIGNIN_FAILURE:
    case AuthActions.YAAUTH_FAILURE:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        isOAuth: false,
        oAuthCode: '',
        error: action.payload?.error,
      };
    case AuthActions.LOGOUT:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        isOAuth: false,
        oAuthCode: '',
        error: '',
      };
    default:
      return state;
  }
}
