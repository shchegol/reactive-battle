import { UserActions } from '@store/actions/user';
import { PasswordRequest, UserRequest, UserResponse } from '@api/types';
import { UserAction } from '@store/actions/types';
import AuthAPI from '@api/AuthAPI';
import UserAPI from '@api/UserAPI';
import { showSnackbar } from '@store/actionsCreators/snackbar';
import { Dispatch } from 'react';
import { DispatchSnackbar } from '@store/actionsCreators/types';
// import Cookies from 'js-cookie';

export const fetchUser = () => {
  const request = () => ({ type: UserActions.FETCH_REQUEST });
  const success = (info: UserResponse) => ({ type: UserActions.FETCH_SUCCESS, payload: { info } });
  const failure = (error: string) => ({ type: UserActions.FETCH_FAILURE, payload: { error } });

  return (dispatch: Dispatch<UserAction | DispatchSnackbar>) => {
    dispatch(request());

    return AuthAPI.fetchUser()
      .then((userData) => {
        // if (!Cookies.get('userLogin')) {
        //   Cookies.set('userLogin', userData.login || '', { expires: 7 });
        // }

        dispatch(success(userData));
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

    return UserAPI.changeProfile(data)
      .then((userData) => {
        dispatch(success(userData));
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

    return UserAPI.changeAvatar(data)
      .then((userData) => dispatch(success(userData)))
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

    return UserAPI.changePassword(data)
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

export const clearProfile = () => ({ type: UserActions.CLEAR });
