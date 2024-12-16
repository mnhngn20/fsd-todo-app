import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { MainLayout } from '@/widgets/layout';
import { Toaster } from '@/shared/ui';

export const Route = createRootRoute({
  component: () => (
    <>
      <MainLayout>
        <Outlet />
      </MainLayout>
      <Toaster />
      <TanStackRouterDevtools />
    </>
  )
});
