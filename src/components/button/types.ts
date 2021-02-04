import { ButtonHTMLAttributes } from 'react';

export type Props = {
  color?: 'danger' | 'success' | 'cancel' | 'link'
  width?: 'full'
  icon?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>;
