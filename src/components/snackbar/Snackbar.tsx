import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '@store/types';
import { hideSnackbar } from '@store/actionsCreators/snackbar';
import Portal from '@components/portal/Portal';
import toClassNames from '@utils/toClassNames';
import './snackbar.scss';

/**
 * Snackbar
 *
 * Snackbar hides automatically after duration param
 * Show snackbar - dispatch(showSnackbar())
 * Hide snackbar - dispatch(hideSnackbar())
 *
 * @constructor
 */
const Snackbar: FC = () => {
  const dispatch = useDispatch();
  const snackbar = useSelector((state: ApplicationState) => state.snackbar);
  const timeoutDuration = snackbar.duration * 1000;

  useEffect(() => {
    if (snackbar.isShow) {
      const timeout = setTimeout(() => {
        dispatch(hideSnackbar());
      }, timeoutDuration);

      return () => {
        clearTimeout(timeout);
      };
    }

    return () => {};
  }, [dispatch, snackbar.isShow, timeoutDuration]);

  return (snackbar.isShow ? (
    <Portal rootId="snackbar">
      <div
        className={toClassNames(
          'snackbar',
          {
            [`snackbar_color_${snackbar.type}`]: snackbar.type,
          },
        )}
      >
        <div className="snackbar__container">
          {snackbar.message}
        </div>
      </div>
    </Portal>
  ) : null);
};

export default Snackbar;
