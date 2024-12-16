import { useGetCurrentUser } from '@/entities/user';

export function useIsAuthenticated() {
  const me = useGetCurrentUser();

  return !!me;
}
