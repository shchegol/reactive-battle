import { SnackbarActions } from '@store/actions/snackbar';
import { SnackbarPayload, SnackbarAction } from '@store/actions/types';
import { Dispatch } from 'react';

/**
 * Shows the snackbar
 * @param {SnackbarPayload} payload - snackbar info
 */
export const showSnackbar = (payload: SnackbarPayload) => (dispatch: Dispatch<SnackbarAction>) => {
  console.log('showSnackbar');
  dispatch({ type: SnackbarActions.SNACKBAR_SHOW, payload });
};

/**
 * Hides the snackbar
 */
export const hideSnackbar = () => (dispatch: Dispatch<SnackbarAction>) => {
  dispatch({ type: SnackbarActions.SNACKBAR_HIDE });
};
