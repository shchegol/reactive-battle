import { HTMLAttributes } from 'react';

export type Props = {
  titleText?: string,
  subtitleText?: string,
  imgSrc?: string | undefined,
} & HTMLAttributes<HTMLElement>;
