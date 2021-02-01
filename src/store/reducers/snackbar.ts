import { SnackbarActions, SnackbarAction } from '@store/actions/snackbar';

const initialState = {
  isShow: false,
  message: '',
  duration: 2,
  type: undefined,
};

export function snackbar(
  state = initialState,
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
        duration: 2,
        type: undefined,
      };
    default:
      return state;
  }
}
