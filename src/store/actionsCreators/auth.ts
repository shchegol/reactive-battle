import Cookies from 'js-cookie';
import AuthAPI from '@api/AuthAPI';
import { AuthActions } from '@store/actions/auth';
import { AuthAction, UserAction } from '@store/actions/types';
import { SignUpRequest, UserRequest } from '@api/types';
import { push } from 'connected-react-router';
import { fetchUser, clearProfile } from '@store/actionsCreators/user';
import { hideSnackbar, showSnackbar } from '@store/actionsCreators/snackbar';
import { DispatchSnackbar, DispatchLoading } from '@store/actionsCreators/types';
import { Dispatch } from 'react';
import { IS_SERVER } from '@root/constants';
import { showLoading, hideLoading } from '@store/actionsCreators/loading';

type DispatchWithFetch<T> = (arg0: T | ReturnType<typeof fetchUser>) => void;

export const signup = (data: SignUpRequest) => {
  const request = () => ({ type: AuthActions.SIGNUP_REQUEST });
  const success = () => ({ type: AuthActions.SIGNUP_SUCCESS });
  const failure = (error: string) => ({ type: AuthActions.SIGNUP_FAILURE, error });

  return (dispatch: DispatchWithFetch<AuthAction | DispatchSnackbar | DispatchLoading>) => {
    dispatch(request());

    return AuthAPI
      .signup(data)
      .then(() => {
        // Cookies.set('userLogin', userData.login, { expires: 7 });
        // todo переписать
        dispatch(success());
        dispatch(fetchUser());
        dispatch(showLoading());
        dispatch(showSnackbar({ type: 'success', message: 'registration completed successfully' }));
      }, (error) => {
        dispatch(failure(error.toString()));
        dispatch(showSnackbar({ type: 'danger', message: `${error.toString()}` }));
      })
      .then(() => dispatch(hideLoading()));
  };
};

export const signin = (data: UserRequest) => {
  const request = () => ({ type: AuthActions.SIGNIN_REQUEST });
  const success = () => ({ type: AuthActions.SIGNIN_SUCCESS });
  const failure = (error: string) => ({ type: AuthActions.SIGNIN_FAILURE, error });

  return (dispatch: DispatchWithFetch<AuthAction | DispatchSnackbar | DispatchLoading>) => {
    dispatch(request());

    AuthAPI
      .signin(data)
      .then(() => {
        // Cookies.set('userLogin', userData.login || '', { expires: 7 });
        dispatch(showLoading());
        dispatch(success());
        dispatch(fetchUser());
        dispatch(showSnackbar({ type: 'success', message: 'authorization completed successfully' }));
      }, (error) => {
        dispatch(failure(error.toString()));
        dispatch(showSnackbar({ type: 'danger', message: `${error.toString()}` }));
      });
  };
};

export const yaOauth = (code: string) => {
  const request = (oAuthCode: string) => ({ type: AuthActions.YAAUTH_REQUEST, oAuthCode });
  const success = () => ({ type: AuthActions.YAAUTH_SUCCESS });
  const failure = (error: string) => ({ type: AuthActions.YAAUTH_FAILURE, error });

  return (dispatch: Dispatch<AuthAction | DispatchSnackbar | DispatchLoading>) => {
    dispatch(request(code));

    AuthAPI
      .yaLogin(code)
      .then(() => {
        Cookies.set('isOAuth', 'true', { expires: 7 });
        dispatch(showLoading());
        dispatch(success());
        dispatch(showSnackbar({ type: 'success', message: 'authorization completed successfully' }));
      }, (error) => {
        dispatch(failure(error.toString()));
        dispatch(showSnackbar({ type: 'danger', message: `${error.toString()}` }));
      });
  };
};

export const logout = () => {
  AuthAPI
    .logout()
    .then(() => {
      if (!IS_SERVER) {
        Cookies.remove('userLogin');
        Cookies.remove('isOAuth');
      }
      push('/signin');
    });

  return (dispatch: Dispatch<AuthAction | UserAction | DispatchSnackbar>) => {
    dispatch(clearProfile());
    dispatch(hideSnackbar());
    dispatch({ type: AuthActions.LOGOUT });
  };
};
