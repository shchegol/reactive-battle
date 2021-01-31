import { FC } from 'react';
import { createPortal } from 'react-dom';
import { Props } from './types';

const Portal: FC<Props> = ({
  children,
  rootId,
}) => {
  const root = document.getElementById(rootId);

  if (root) {
    return createPortal(children, root);
  }

  return null;
};

export default Portal;
