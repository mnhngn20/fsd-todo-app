import { useState } from 'react';
import { getMe } from '../api';

export function useGetMe() {
  const [loading, setLoading] = useState(false);
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

  return [getMeFn, { loading, error }] as [
    typeof getMeFn,
    { loading: boolean; error: Error }
  ];
}
