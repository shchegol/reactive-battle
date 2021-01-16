import { HTMLAttributes, ImgHTMLAttributes } from 'react';

export type Props = {
  titleText?: string,
  subtitleText?: string,
  imgSrc?: ImgHTMLAttributes<HTMLImageElement>,
} & HTMLAttributes<HTMLElement>;
