import { ButtonHTMLAttributes } from 'react';

export type Props = {
  color?: 'danger' | 'success' | 'cancel' | 'link'
  size?: 's' | 'l' | 'xl'
  width?: 'full'
  icon?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>;
