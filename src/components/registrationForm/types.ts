import React from 'react';
import { SignUpRequest } from '@root/types/models';

export type Props = {
  handleSubmit: (event: React.FormEvent, userData: SignUpRequest) => void,
  errorMsg?: string
};
