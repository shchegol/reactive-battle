/* eslint-disable max-len */

import { deepCopy } from '@root/utils/deepCopy';
import { ProfileState } from '../types';

const defaultState: ProfileState = {
  user: {
    id: '',
    avatar: undefined,
  },
};

const SET_AVATAR = 'PROFILE/SET_AVATAR';

interface SetSvatarActionType {
  type: typeof SET_AVATAR;
  avatar: string | undefined;
}

type ProfileActionTypes = SetSvatarActionType;

export function profileReducer(state: ProfileState = defaultState, action: ProfileActionTypes): ProfileState {
  switch (action.type) {
    case SET_AVATAR:
      return {
        ...state,
        user: { ...deepCopy(state.user), avatar: action.avatar },
      };
    default:
      return state;
  }
}

export function setAvatar(avatar: string | undefined): SetSvatarActionType {
  return { type: SET_AVATAR, avatar };
}
