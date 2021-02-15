/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelector from '@store/selectors/auth';

const PrivateRoute = (props: RouteProps) => {
  const { isLoggedIn } = useSelector(authSelector);

  return isLoggedIn ? <Route {...props} /> : <Redirect to={{ pathname: '/signin' }} />;
};

export default PrivateRoute;
