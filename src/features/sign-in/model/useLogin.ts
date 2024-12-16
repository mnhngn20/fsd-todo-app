import { useState } from 'react';
import { login, LoginInput } from '@/entities/authentication';

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  const loginFn = async (input: LoginInput) => {
    try {
      setLoading(true);
      await login(input);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  return [loginFn, { loading, error }] as [
    typeof loginFn,
    { loading: boolean; error: Error }
  ];
}
