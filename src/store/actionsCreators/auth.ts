import AuthActions from '@store/actions/auth';
import AuthAPI from '@api/AuthAPI';
import { SignUpRequest, UserRequest, UserResponse } from '@root/types/models';
import { history } from '@root/utils/history';

export const fetch = () => {
  function request() { return { type: AuthActions.FETCH_REQUEST }; }
  function success(user: UserResponse) { return { type: AuthActions.FETCH_SUCCESS, user }; }
  function failure(error: string) { return { type: AuthActions.FETCH_FAILURE, error }; }

  // todo убрать any
  return (dispatch: any) => {
    dispatch(request());

    AuthAPI.fetchUser()
      .then((response) => response.json())
      .then((user) => dispatch(success(user)))
      .catch((error) => dispatch(failure(error.toString())));
  };
};

export const signup = (data: SignUpRequest) => {
  function request() { return { type: AuthActions.SIGNUP_REQUEST }; }
  function success() { return { type: AuthActions.SIGNUP_SUCCESS }; }
  function failure(error: string) { return { type: AuthActions.SIGNUP_FAILURE, error }; }

  // todo убрать any
  return (dispatch: any) => {
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
  function request() { return { type: AuthActions.SIGNIN_REQUEST }; }
  function success() { return { type: AuthActions.SIGNIN_SUCCESS }; }
  function failure(error: string) { return { type: AuthActions.SIGNIN_FAILURE, error }; }

  // todo убрать any
  return (dispatch: any) => {
    dispatch(request());

    AuthAPI
      .signin(data)
      .then(
        () => {
          localStorage.setItem('userLogin', data.login || '');
          dispatch(success());
          dispatch(fetch());
        },
      )
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
