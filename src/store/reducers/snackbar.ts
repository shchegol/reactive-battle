import { SnackbarActions } from '@store/actions/snackbar';
import { SnackbarAction } from '@store/actions/types';
import { SnackbarState } from '@store/types';

const initialState = {
  isShow: false,
  message: '',
  duration: 5,
  type: undefined,
};

/**
 * Snackbar reducer
 * @param {SnackbarState} state - snackbar state
 * @param {SnackbarAction} action - snackbar action
 */
export function snackbar(
  state: SnackbarState = initialState,
  action: SnackbarAction,
) {
  switch (action.type) {
    case SnackbarActions.SNACKBAR_SHOW:
      return {
        ...state,
        ...action.payload,
        isShow: true,
      };
    case SnackbarActions.SNACKBAR_HIDE:
      return {
        ...state,
        isShow: false,
        message: '',
        duration: 5,
        type: undefined,
      };
    default:
      return state;
  }
}
