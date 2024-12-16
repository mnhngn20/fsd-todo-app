import { createLazyFileRoute } from '@tanstack/react-router';
import { SignUpForm } from '@/features/sign-up';

export const Route = createLazyFileRoute('/sign-up')({
  component: RouteComponent
});

function RouteComponent() {
  return <SignUpForm />;
}
