import { HTMLAttributes } from 'react';

export type Props = {
  titleText?: string,
  subtitleText?: string,
  imgSrc?: string,
  hasImg?: boolean,
} & HTMLAttributes<HTMLElement>;
