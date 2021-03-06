import Loading from '@pages/loading';
import React from 'react';
import { useSelector } from 'react-redux';
import loadingSelector from '@store/selectors/loading';

export const withLoading = (WrappedComponent: any) => () => {
  const selector = useSelector(loadingSelector);

  return (
    <>
      {selector.isShow && (
      <Loading />
      )}
      <WrappedComponent />
    </>
  );
};
