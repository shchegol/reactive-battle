/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useAuth } from '@root/context/auth';

const PrivateRoute: React.FC<RouteProps> = (props) => {
  const authInfo = useAuth();

  if (!authInfo.userId) {
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
