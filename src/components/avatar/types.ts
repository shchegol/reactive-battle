import React, { ImgHTMLAttributes } from 'react';

export type Props = {
  size?: 'xs'
  onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
} & ImgHTMLAttributes<HTMLImageElement>;
