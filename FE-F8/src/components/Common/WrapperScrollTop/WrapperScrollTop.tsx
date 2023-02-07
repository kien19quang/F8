import * as React from 'react';
import { useLocation } from 'react-router-dom';

export interface IWrapperScrollTopProps {
  children: React.ReactElement;
}

export default function WrapperScrollTop({ children }: IWrapperScrollTopProps) {
  const location = useLocation();
  React.useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
}
