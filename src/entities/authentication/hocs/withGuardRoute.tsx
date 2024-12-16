/* eslint-disable react/display-name */
import { useNavigate } from '@tanstack/react-router';
import { useEffect } from 'react';
import { ACCESS_TOKEN_LS_KEY } from '@/shared/constants';
import { localStorageGetItem } from '@/shared/lib';

export function withGuardRoute<T extends object>(
  WrappedComponent: React.ComponentType<T>,
  isPrivate = false
) {
  return function (props: T) {
    const navigate = useNavigate();
    useEffect(() => {
      const accessToken = localStorageGetItem(ACCESS_TOKEN_LS_KEY);
      if (!accessToken && isPrivate) {
        navigate({
          to: '/sign-in',
          replace: true
        });
      }
      if (accessToken && !isPrivate) {
        navigate({
          to: '/',
          replace: true
        });
      }
    }, [navigate]);

    if (!navigator.onLine) location.reload();
    return <WrappedComponent {...props} />;
  };
}
