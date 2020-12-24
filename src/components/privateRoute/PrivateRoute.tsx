/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useAuth } from '@root/context/auth';

function PrivateRoute<T extends RouteProps>({ component, ...rest }: T) {
  const authInfo = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => (
        authInfo.userId ? (
          <Component {...props} />
        ) : (
          <Redirect to="/signin" />
        )
      )}
    />
  );
}

export default PrivateRoute;
