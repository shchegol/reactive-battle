import { SnackbarActions, SnackbarPayload, SnackbarAction } from '@store/actions/snackbar';
import { Dispatch } from 'react';

/**
 * Shows the snackbar
 * @param {SnackbarPayload} payload - snackbar info
 */
export const showSnackbar = (payload: SnackbarPayload) => (dispatch: Dispatch<SnackbarAction>) => {
  dispatch({ type: SnackbarActions.SNACKBAR_SHOW, payload });
};

/**
 * Hides the snackbar
 */
export const hideSnackbar = () => (dispatch: Dispatch<SnackbarAction>) => {
  dispatch({ type: SnackbarActions.SNACKBAR_HIDE });
};
