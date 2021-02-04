import { ProfileActions, ProfileActionTypes } from '@store/actions/profile';

export const setAvatar = (avatar: string | undefined): ProfileActionTypes => ({ type: ProfileActions.SET_AVATAR, avatar });
