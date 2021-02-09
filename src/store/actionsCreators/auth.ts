import Cookies from 'js-cookie';
import AuthAPI from '@api/AuthAPI';
import { AuthActions } from '@store/actions/auth';
import { AuthAction } from '@store/actions/types';
import { SignUpRequest, UserRequest } from '@api/types';
import { isServer } from '@store/store';
import { push } from 'connected-react-router';
import { fetchUser } from '@store/actionsCreators/user';
import { showSnackbar } from '@store/actionsCreators/snackbar';
import { DispatchSnackbar } from '@store/actionsCreators/types';
import { Dispatch } from 'react';

type DispatchWithFetch<T> = (arg0: T | ReturnType<typeof fetchUser>) => void;

export const signup = (data: SignUpRequest) => {
  const request = () => ({ type: AuthActions.SIGNUP_REQUEST });
  const success = () => ({ type: AuthActions.SIGNUP_SUCCESS });
  const failure = (error: string) => ({ type: AuthActions.SIGNUP_FAILURE, error });

  return (dispatch: DispatchWithFetch<AuthAction | DispatchSnackbar>) => {
    dispatch(request());

    AuthAPI
      .signup(data)
      .then(() => {
        Cookies.set('userLogin', data.login, { expires: 7 });
        dispatch(success());
        dispatch(fetchUser());
        dispatch(showSnackbar({ type: 'success', message: 'registration completed successfully' }));
      })
      .catch((error) => {
        dispatch(failure(error.toString()));
        dispatch(showSnackbar({ type: 'danger', message: `${error.toString()}` }));
      });
  };
};

export const signin = (data: UserRequest) => {
  const request = () => ({ type: AuthActions.SIGNIN_REQUEST });
  const success = () => ({ type: AuthActions.SIGNIN_SUCCESS });
  const failure = (error: string) => ({ type: AuthActions.SIGNIN_FAILURE, error });

  return (dispatch: DispatchWithFetch<AuthAction | DispatchSnackbar>) => {
    dispatch(request());

    AuthAPI
      .signin(data)
      .then(() => {
        Cookies.set('userLogin', data.login || '', { expires: 7 });
        dispatch(success());
        dispatch(fetchUser());
        dispatch(showSnackbar({ type: 'success', message: 'authorization completed successfully' }));
      })
      .catch((error) => {
        dispatch(failure(error.toString()));
        dispatch(showSnackbar({ type: 'danger', message: `${error.toString()}` }));
      });
  };
};

export const yaOauth = (code: string) => {
  const request = () => ({ type: AuthActions.YAAUTH_REQUEST });
  const success = () => ({ type: AuthActions.YAAUTH_SUCCESS });
  const failure = (error: string) => ({ type: AuthActions.YAAUTH_FAILURE, error });

  return (dispatch: Dispatch<AuthAction | DispatchSnackbar>) => {
    dispatch(request());

    AuthAPI
      .yaLogin(code)
      .then(() => {
        Cookies.set('isOAuth', 'true', { expires: 7 });
        dispatch(success());
        dispatch(showSnackbar({ type: 'success', message: 'authorization completed successfully' }));
      })
      .catch((error) => {
        dispatch(failure(error.toString()));
        dispatch(showSnackbar({ type: 'danger', message: `${error.toString()}` }));
      });
  };
};

export const logout = () => {
  AuthAPI
    .logout()
    .then(() => {
      if (!isServer) {
        Cookies.remove('userLogin');
        Cookies.remove('isOAuth');
      }
      push('/signin');
    });

  return { type: AuthActions.LOGOUT };
};
