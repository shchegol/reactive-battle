import Loading from '@pages/loading';
import React from 'react';
import { useSelector } from 'react-redux';
import authSelector from '@store/selectors/auth';

export const withLoading = (WrappedComponent: any) => () => {
  const selector = useSelector(authSelector);

  return (
    selector.isLoading ? <Loading /> : <WrappedComponent />
  );
};
