/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ApplicationState } from '@store/types';

const PrivateRoute = (props: RouteProps) => {
  const isLoggedIn = useSelector((state: ApplicationState) => state.auth.isLoggedIn);

  return isLoggedIn ? <Route {...props} /> : <Redirect to={{ pathname: '/signin' }} />;
};

export default PrivateRoute;
