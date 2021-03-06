import { AuthActions } from '@store/actions/auth';
import { AuthAction } from '@store/actions/types';
import Cookies from 'js-cookie';

const hasSession = !!Cookies.get('ssid');
const initialState = {
  isLoggedIn: hasSession,
  isOAuth: false,
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
        isLoggedIn: false,
        isOAuth: false,
        oAuthCode: '',
        error: '',
      };
    case AuthActions.YAAUTH_REQUEST:
      return {
        ...state,
        isLoggedIn: false,
        isOAuth: false,
        oAuthCode: action.payload?.oAuthCode,
        error: '',
      };
    case AuthActions.SIGNUP_SUCCESS:
    case AuthActions.SIGNIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isOAuth: false,
        oAuthCode: '',
        error: '',
      };
    case AuthActions.YAAUTH_SUCCESS:
      return {
        ...state,
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
        isLoggedIn: false,
        isOAuth: false,
        oAuthCode: '',
        error: action.payload?.error,
      };
    case AuthActions.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        isOAuth: false,
        oAuthCode: '',
        error: '',
      };
    default:
      return state;
  }
}
