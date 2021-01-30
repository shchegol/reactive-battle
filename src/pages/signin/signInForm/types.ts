import React from 'react';
import { SignInRequest } from '@root/types/models';

export interface Props {
  handleSubmit: (event: React.FormEvent, userData: SignInRequest) => void,
  errorMsg?: string
}
