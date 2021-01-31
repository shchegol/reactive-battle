import React, { FC } from 'react';
import Portal from '@components/portal/Portal';
import toClassNames from '@utils/toClassNames';
import { Props } from './types';
import './snackbar.scss';

const Snackbar: FC<Props> = ({
  isShow = false,
  text = '',
  color = undefined,
  ...rest
}) => (isShow ? (
  <Portal rootId="snackbar">
    <div
      className={toClassNames(
        'snackbar',
        {
          snackbar_color_danger: color === 'danger',
          snackbar_color_success: color === 'success',
        },
        rest.className,
      )}
    >
      <div className="snackbar__container">
        {text}
      </div>
    </div>
  </Portal>
) : null);

export default Snackbar;
