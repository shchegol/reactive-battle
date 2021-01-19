import { ButtonHTMLAttributes } from 'react';

export type Props = {
  color?: 'danger' | 'success' | 'cancel' | 'link'
  width?: 'full'
} & ButtonHTMLAttributes<HTMLButtonElement>;
