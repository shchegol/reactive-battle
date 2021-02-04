export enum ProfileActions {
  SET_AVATAR = 'PROFILE/SET_AVATAR',
}

interface AvatarAction {
  type: ProfileActions;
  avatar?: string;
}

export type ProfileActionTypes = AvatarAction;
