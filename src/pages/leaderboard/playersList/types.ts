import { Player } from '@store/types';
import { StyleHTMLAttributes } from 'react';

type OwnProps = {
  players: Player[];
} & StyleHTMLAttributes<HTMLElement>;

export type Props = OwnProps;
