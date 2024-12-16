import { useState } from 'react';
import { signIn, SignInInput } from '@/entities/authentication';

export function useSignIn() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  const signInFn = async (input: SignInInput) => {
    try {
      setLoading(true);
      return await signIn(input);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  return [signInFn, { loading, error }] as [
    typeof signInFn,
    { loading: boolean; error: Error }
  ];
}
