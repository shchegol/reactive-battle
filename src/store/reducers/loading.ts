import { LoadingActions } from '@store/actions/loading';
import { LoadingAction } from '@store/actions/types';
import { LoadingState } from '@store/types';

const initialState = {
  isShow: false,
};

/**
 * Loading reducer
 * @param {LoadingState} state - loading state
 * @param {LoadingAction} action - loading action
 */
export function loading(
  state: LoadingState = initialState,
  action: LoadingAction,
) {
  switch (action.type) {
    case LoadingActions.SHOW:
      return {
        ...state,
        isShow: true,
      };
    case LoadingActions.HIDE:
      return {
        ...state,
        isShow: false,
      };
    default:
      return state;
  }
}
