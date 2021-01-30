import { HTMLAttributes } from 'react';

interface IPlayer {
  name: string,
  lives: number,
  score: number,
  kills: number,
}

export type Props = {
  player?: Partial<IPlayer>;
  enemies?: number;
  level?: number;
} & HTMLAttributes<HTMLElement>;
