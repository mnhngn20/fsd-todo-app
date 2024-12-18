/* eslint-disable react/display-name */
import { useNavigate } from '@tanstack/react-router';
import { useLayoutEffect } from 'react';
import { useIsAuthenticated } from './useIsAuthenticated';

export function withGuardRoute<T extends object>(
  WrappedComponent: React.ComponentType<T>,
  isPrivate = false
) {
  return function (props: T) {
    const navigate = useNavigate();
    const isAuthenticated = useIsAuthenticated();

    useLayoutEffect(() => {
      if (!isAuthenticated && isPrivate) {
        navigate({
          to: '/sign-in',
          replace: true
        });
      }
      if (isAuthenticated && !isPrivate) {
        navigate({
          to: '/',
          replace: true
        });
      }
    }, [isAuthenticated, navigate]);

    if (!navigator.onLine) location.reload();
    return <WrappedComponent {...props} />;
  };
}
