import { Leader } from '@root/store/types';
import { StyleHTMLAttributes } from 'react';

type OwnProps = {
  leaders: Leader[];
} & StyleHTMLAttributes<HTMLElement>;

export type Props = OwnProps;
