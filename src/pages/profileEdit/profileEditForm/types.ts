import React, { FormHTMLAttributes } from 'react';
import { PasswordRequest, UserRequest } from '@api/types';

export type UserProfile = {
  avatar: File | string;
  display_name: string;
} & UserRequest & PasswordRequest;

export type Props = {
  errorMsg?: string;
  userData?: Partial<UserProfile>;
  isOAuth?: boolean,
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & FormHTMLAttributes<HTMLFormElement>;
