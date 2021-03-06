import { LoadingActions } from '@store/actions/loading';
import { LoadingAction } from '@store/actions/types';
import { Dispatch } from 'react';

/**
 * Shows the loading window
 */
export const showLoading = () => (dispatch: Dispatch<LoadingAction>) => {
  dispatch({ type: LoadingActions.SHOW });
};

/**
 * Hides the loading window
 */
export const hideLoading = () => (dispatch: Dispatch<LoadingAction>) => {
  dispatch({ type: LoadingActions.HIDE });
};
