import { deepCopy } from '@root/utils/deepCopy';
import { ProfileActions, ProfileActionTypes } from '@store/actions/profile';
import { ProfileState } from '../types';

const defaultState: ProfileState = {
  user: {
    id: '',
    avatar: undefined,
  },
};

export function profileReducer(state: ProfileState = defaultState, action: ProfileActionTypes): ProfileState {
  switch (action.type) {
    case ProfileActions.SET_AVATAR:
      return {
        ...state,
        user: { ...deepCopy(state.user), avatar: action.avatar },
      };
    default:
      return state;
  }
}
