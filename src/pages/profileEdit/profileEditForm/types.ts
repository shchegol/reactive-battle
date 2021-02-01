import React, { FormHTMLAttributes } from 'react';
import { UserProfile } from '@root/types/user';

export type Props = {
  errorMsg?: string,
  userData?: Partial<UserProfile>,
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
} & FormHTMLAttributes<HTMLFormElement>;
