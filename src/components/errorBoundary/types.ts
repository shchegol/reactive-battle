import { ReactNode } from 'react';

export type Props = {
  children: ReactNode
};

export type State = {
  error?: Error | null
};
