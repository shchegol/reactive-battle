import { AuthActions, AuthActionTypes } from '@store/actions/auth';
import AuthAPI from '@api/AuthAPI';
import { SignUpRequest, UserRequest, UserResponse } from '@root/types/models';
import { history } from '@root/utils/history';

type DispatchWithFetch<T> = (arg0: T | ReturnType<typeof fetch>) => void;

export const fetch = () => {
  const request = () => ({ type: AuthActions.SIGNUP_REQUEST });
  const success = (user: UserResponse) => ({ type: AuthActions.FETCH_SUCCESS, user });
  const failure = (error: string) => ({ type: AuthActions.FETCH_FAILURE, error });

  return (dispatch: DispatchWithFetch<AuthActionTypes>) => {
    dispatch(request());

    AuthAPI.fetchUser()
      .then((response) => response.json())
      .then((user) => dispatch(success(user)))
      .catch((error) => dispatch(failure(error.toString())));
  };
};

export const signup = (data: SignUpRequest) => {
  const request = () => ({ type: AuthActions.SIGNUP_REQUEST });
  const success = () => ({ type: AuthActions.SIGNUP_SUCCESS });
  const failure = (error: string) => ({ type: AuthActions.SIGNUP_FAILURE, error });

  return (dispatch: DispatchWithFetch<AuthActionTypes>) => {
    dispatch(request());

    AuthAPI
      .signup(data)
      .then(() => {
        localStorage.setItem('userLogin', data.login);
        dispatch(success());
        dispatch(fetch());
      })
      .catch((error) => dispatch(failure(error.toString())));
  };
};

export const signin = (data: UserRequest) => {
  const request = () => ({ type: AuthActions.SIGNIN_REQUEST });
  const success = () => ({ type: AuthActions.SIGNIN_SUCCESS });
  const failure = (error: string) => ({ type: AuthActions.SIGNIN_FAILURE, error });

  return (dispatch: DispatchWithFetch<AuthActionTypes>) => {
    dispatch(request());

    AuthAPI
      .signin(data)
      .then(() => {
        localStorage.setItem('userLogin', data.login || '');
        dispatch(success());
        dispatch(fetch());
      })
      .catch((error) => dispatch(failure(error.toString())));
  };
};

export const logout = () => {
  AuthAPI
    .logout()
    .then(() => {
      localStorage.setItem('userLogin', '');
      history.push('/signin');
    });

  return { type: AuthActions.LOGOUT };
};
