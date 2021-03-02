import React, { FormHTMLAttributes } from 'react';
import { Review } from '@store/types';

export type Props = {
  errorMsg?: string
  userData: Partial<Review>
  onInputChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
} & FormHTMLAttributes<HTMLFormElement>;
