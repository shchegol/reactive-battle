import { UserActions } from '@store/actions/user';
import { PasswordRequest, UserRequest, UserResponse } from '@api/types';
import { UserAction } from '@store/actions/types';
import AuthAPI from '@api/AuthAPI';
import UserAPI from '@api/UserAPI';
import { showSnackbar } from '@store/actionsCreators/snackbar';
import { Dispatch } from 'react';
import { DispatchSnackbar } from '@store/actionsCreators/types';

export const fetch = () => {
  const request = () => ({ type: UserActions.FETCH_REQUEST });
  const success = (info: UserResponse) => ({ type: UserActions.FETCH_SUCCESS, payload: { info } });
  const failure = (error: string) => ({ type: UserActions.FETCH_FAILURE, payload: { error } });

  return (dispatch: Dispatch<UserAction | DispatchSnackbar>) => {
    dispatch(request());

    AuthAPI.fetchUser()
      .then((response) => JSON.parse(response))
      .then((user) => {
        dispatch(success(user));
      })
      .catch((error) => {
        dispatch(showSnackbar({ type: 'danger', message: `Something went wrong. ${error.toString()}` }));
        dispatch(failure(error.toString()));
      });
  };
};

export const changeProfile = (data: UserRequest) => {
  const request = () => ({ type: UserActions.CHANGE_PROFILE_REQUEST });
  const success = (info: UserResponse) => ({ type: UserActions.CHANGE_PROFILE_SUCCESS, payload: { info } });
  const failure = (error: string) => ({ type: UserActions.CHANGE_PROFILE_FAILURE, payload: { error } });

  return (dispatch: Dispatch<UserAction | DispatchSnackbar>) => {
    dispatch(request());

    UserAPI.changeProfile(data)
      .then((response) => JSON.parse(response))
      .then((user) => {
        dispatch(success(user));
        dispatch(showSnackbar({ type: 'success', message: 'Profile updated successfully' }));
      })
      .catch((error) => {
        dispatch(failure(error.toString()));
        dispatch(showSnackbar({ type: 'danger', message: `Something went wrong. ${error.toString()}` }));
      });
  };
};

export const changeAvatar = (data: File) => {
  const request = () => ({ type: UserActions.CHANGE_AVATAR_REQUEST });
  const success = (info: UserResponse) => ({ type: UserActions.CHANGE_AVATAR_SUCCESS, payload: { info } });
  const failure = (error: string) => ({ type: UserActions.CHANGE_AVATAR_FAILURE, payload: { error } });

  return (dispatch: Dispatch<UserAction | DispatchSnackbar>) => {
    dispatch(request());

    UserAPI.changeAvatar(data)
      .then((response) => JSON.parse(response))
      .then((user) => {
        dispatch(success(user));
      })
      .catch((error) => {
        dispatch(failure(error.toString()));
        dispatch(showSnackbar({ type: 'danger', message: `Something went wrong. ${error.toString()}` }));
      });
  };
};

export const changePassword = (data: PasswordRequest) => {
  const request = () => ({ type: UserActions.CHANGE_PASSWORD_REQUEST });
  const success = () => ({ type: UserActions.CHANGE_PASSWORD_SUCCESS });
  const failure = (error: string) => ({ type: UserActions.CHANGE_PASSWORD_FAILURE, error });

  return (dispatch: Dispatch<UserAction | DispatchSnackbar>) => {
    dispatch(request());

    UserAPI.changePassword(data)
      .then(() => {
        dispatch(success());
        dispatch(showSnackbar({ type: 'success', message: 'Password updated successfully' }));
      })
      .catch((error) => {
        dispatch(failure(error.toString()));
        dispatch(showSnackbar({ type: 'danger', message: `Something went wrong. ${error.toString()}` }));
      });
  };
};
