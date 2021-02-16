import { UserActions } from '@store/actions/user';
import { UserAction } from '@store/actions/types';
import { UserState } from '@store/types';

const defaultState: UserState = {
  info: {
    id: 0,
    first_name: '',
    second_name: '',
    display_name: '',
    login: '',
    email: '',
    phone: '',
    avatar: '',
  },
  error: '',
};

export default function userReducer(
  state = defaultState,
  action: UserAction,
): UserState {
  switch (action.type) {
    case UserActions.FETCH_REQUEST:
    case UserActions.CHANGE_PROFILE_REQUEST:
    case UserActions.CHANGE_AVATAR_REQUEST:
    case UserActions.CHANGE_PASSWORD_REQUEST:
    case UserActions.CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        error: '',
      };
    case UserActions.FETCH_SUCCESS:
    case UserActions.CHANGE_PROFILE_SUCCESS:
    case UserActions.CHANGE_AVATAR_SUCCESS:
      return {
        ...state,
        ...action.payload,
        error: '',
      };
    case UserActions.FETCH_FAILURE:
    case UserActions.CHANGE_PROFILE_FAILURE:
    case UserActions.CHANGE_AVATAR_FAILURE:
    case UserActions.CHANGE_PASSWORD_FAILURE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
