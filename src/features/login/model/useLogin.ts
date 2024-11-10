import { useState } from 'react';
import { login, LoginInput } from '@/entities/authentication';

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>();

  const loginFn = async (input: LoginInput) => {
    try {
      setLoading(true);
      await login(input);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return [loginFn, { loading, error }];
}
