import React, { ImgHTMLAttributes } from 'react';

export type Props = {
  size?: 'xs' | 'l'
  onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
} & ImgHTMLAttributes<HTMLImageElement>;
