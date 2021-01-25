import React, { ImgHTMLAttributes } from 'react';

export type Props = {
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
} & ImgHTMLAttributes<HTMLImageElement>;
