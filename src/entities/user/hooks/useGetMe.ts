import { useLayoutEffect } from '@tanstack/react-router';
import { useState } from 'react';
import { ACCESS_TOKEN_LS_KEY } from '@/shared/constants';
import { localStorageGetItem } from '@/shared/lib';
import { getMe } from '../api';
import { User } from '../model';

export function useGetMe() {
  const [loading, setLoading] = useState(
    !!localStorageGetItem(ACCESS_TOKEN_LS_KEY)
  );
  const [currentUser, setCurrentUser] = useState<User | undefined>(undefined);

  const [error, setError] = useState<Error>();

  const getMeFn = async () => {
    try {
      setLoading(true);
      return await getMe();
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  useLayoutEffect(() => {
    if (localStorageGetItem(ACCESS_TOKEN_LS_KEY)) {
      (async () => {
        const resp = await getMeFn();
        if (resp?.success) {
          setCurrentUser(resp.user);
        }
      })();
    }
  }, []);

  return {
    loading,
    currentUser,
    setCurrentUser,
    error
  };
}
