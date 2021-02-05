import { HTMLAttributes } from 'react';

export type Props = {
  isShow: boolean
  text: string
  color?: 'danger' | 'success'
} & HTMLAttributes<HTMLElement>;
