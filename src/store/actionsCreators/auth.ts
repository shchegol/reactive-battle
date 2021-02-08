import AuthAPI from '@api/AuthAPI';
import { AuthActions } from '@store/actions/auth';
import { AuthAction } from '@store/actions/types';
import { SignUpRequest, UserRequest } from '@api/types';
import { isServer } from '@store/store';
import { push } from 'connected-react-router';
import { fetchUser } from '@store/actionsCreators/user';

type DispatchWithFetch<T> = (arg0: T | ReturnType<typeof fetchUser>) => void;

export const signup = (data: SignUpRequest) => {
  const request = () => ({ type: AuthActions.SIGNUP_REQUEST });
  const success = () => ({ type: AuthActions.SIGNUP_SUCCESS });
  const failure = (error: string) => ({ type: AuthActions.SIGNUP_FAILURE, error });

  return (dispatch: DispatchWithFetch<AuthAction>) => {
    dispatch(request());

    AuthAPI
      .signup(data)
      .then(() => {
        if (!isServer) window.localStorage.setItem('userLogin', data.login);
        dispatch(success());
        dispatch(fetchUser());
      })
      .catch((error) => dispatch(failure(error.toString())));
  };
};

export const signin = (data: UserRequest) => {
  const request = () => ({ type: AuthActions.SIGNIN_REQUEST });
  const success = () => ({ type: AuthActions.SIGNIN_SUCCESS });
  const failure = (error: string) => ({ type: AuthActions.SIGNIN_FAILURE, error });

  return (dispatch: DispatchWithFetch<AuthAction>) => {
    dispatch(request());

    AuthAPI
      .signin(data)
      .then(() => {
        if (!isServer) window.localStorage.setItem('userLogin', data.login || '');
        dispatch(success());
        dispatch(fetchUser());
      })
      .catch((error) => dispatch(failure(error.toString())));
  };
};

export const yaOauth = (code: string) => {
    const request = () => ({ type: AuthActions.YAAUTH_REQUEST });
    const success = () => ({ type: AuthActions.YAAUTH_SUCCESS });
    const failure = (error: string) => ({ type: AuthActions.YAAUTH_FAILURE, error });

    return (dispatch: DispatchWithFetch<AuthAction>) => {
        dispatch(request());

        AuthAPI
            .yaLogin(code)
            .then(() => {
                dispatch(success());
            })
            .catch((error) => dispatch(failure(error.toString())));
    };
};

export const logout = () => {
  AuthAPI
    .logout()
    .then(() => {
      if (!isServer) window.localStorage.setItem('userLogin', '');
      push('/signin');
    });

  return { type: AuthActions.LOGOUT };
};
