import React from 'react';
import { SignInRequest } from '@api/types';

export interface Props {
  handleSubmit: (event: React.FormEvent, userData: SignInRequest) => void,
  errorMsg?: string
}
