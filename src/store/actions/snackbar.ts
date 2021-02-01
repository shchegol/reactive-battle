export enum SnackbarActions {
  SNACKBAR_SHOW = 'SNACKBAR/SHOW',
  SNACKBAR_HIDE = 'SNACKBAR/HIDE',
}

export interface SnackbarPayload {
  message: string,
  duration?: number,
  type?: 'danger' | 'success'
}

export interface SnackbarAction {
  type: SnackbarActions;
  payload?: SnackbarPayload
}
