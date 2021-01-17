import { PasswordRequest, UserRequest } from '@root/types/models';

export type UserProfile = {
  avatar: File
  display_name: string,
} & UserRequest & PasswordRequest;
