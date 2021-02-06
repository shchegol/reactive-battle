import React from 'react';
import { SignUpRequest } from '@api/types';

export type Props = {
  handleSubmit: (event: React.FormEvent, userData: SignUpRequest) => void,
  errorMsg?: string
};
