import * as React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export interface IPrivateRouteProps {}

export default function PrivateRoute(props: IPrivateRouteProps) {
  const isLoggedIn = window.localStorage.getItem('accessToken') ? true : false;

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}
