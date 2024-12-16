import { useState } from 'react';
import { signUp, SignUpInput } from '@/entities/authentication';

export function useSignUp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  const singUpFn = async (input: SignUpInput) => {
    try {
      setLoading(true);
      return await signUp(input);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  return [singUpFn, { loading, error }] as [
    typeof singUpFn,
    { loading: boolean; error: Error }
  ];
}
