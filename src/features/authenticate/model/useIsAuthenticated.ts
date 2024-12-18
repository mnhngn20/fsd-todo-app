import { useGetCurrentUser } from '@/entities/user';

export function useIsAuthenticated() {
  const me = useGetCurrentUser();

  console.log(me);

  return !!me;
}
