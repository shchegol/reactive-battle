/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ApplicationState } from '@store/types';

const PrivateRoute: React.FC<RouteProps> = (props) => {
  const isLoggedIn = useSelector((state: ApplicationState) => state.auth.isLoggedIn);

  if (!isLoggedIn) {
    return (
      <Route
        {...props}
        component={() => <Redirect to={{ pathname: '/signin' }} />}
        render={undefined}
      />
    );
  }
  return <Route {...props} />;
};

export default PrivateRoute;
