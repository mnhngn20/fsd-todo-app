import { Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Toaster } from '@/shared/ui';
import { MainLayout } from './MainLayout';

export function RootPage() {
  return (
    <>
      <MainLayout>
        <Outlet />
      </MainLayout>
      <Toaster />
      <TanStackRouterDevtools />
    </>
  );
}
