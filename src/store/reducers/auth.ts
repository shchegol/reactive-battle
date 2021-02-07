import { AuthActions } from '@store/actions/auth';
import { AuthAction } from '@store/actions/types';

const login = localStorage.getItem('userLogin');

const initialState = {
  isLoggedIn: !!login,
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
    case AuthActions.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        error: '',
      };
    case AuthActions.SIGNUP_SUCCESS:
    case AuthActions.SIGNIN_SUCCESS:
    case AuthActions.YAAUTH_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        error: '',
      };
    case AuthActions.SIGNUP_FAILURE:
    case AuthActions.SIGNIN_FAILURE:
    case AuthActions.YAAUTH_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        error: action.error,
      };
    default:
      return state;
  }
}
