import { Icon } from '@iconify/react';
import { useNavigate } from '@tanstack/react-router';
import { useSetCurrentUser } from '@/entities/user';
import { ACCESS_TOKEN_LS_KEY } from '@/shared/constants';
import { Button } from '@/shared/ui';

export function LogoutButton() {
  const navigate = useNavigate();
  const setMe = useSetCurrentUser();

  const handleLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN_LS_KEY);
    setMe(undefined);
    navigate({
      to: '/',
      replace: true
    });
  };

  return (
    <Button size="sm" variant="ghost" onClick={handleLogout}>
      <Icon fontSize={10} icon="line-md:logout" />
      <span>Log out</span>
    </Button>
  );
}
