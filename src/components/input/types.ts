import { InputHTMLAttributes } from 'react';

export type Props = {
  labelText?: string,
  messageText?: string,
  isError?: boolean,
} & InputHTMLAttributes<HTMLInputElement>;
