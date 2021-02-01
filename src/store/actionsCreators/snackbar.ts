import { SnackbarActions, SnackbarPayload, SnackbarAction } from '@store/actions/snackbar';
import { Dispatch } from 'react';

export const showSnackbar = (payload: SnackbarPayload) => (dispatch: Dispatch<SnackbarAction>) => {
  dispatch({ type: SnackbarActions.SNACKBAR_SHOW, payload });
};

export const hideSnackbar = () => (dispatch: Dispatch<SnackbarAction>) => {
  dispatch({ type: SnackbarActions.SNACKBAR_HIDE });
};
