import { LoginForm } from '@/features/login';
import { PageHeader } from '@/shared/ui';

export function LoginPage() {
  return (
    <div>
      <PageHeader title="This is a login page" />
      <LoginForm />
    </div>
  );
}
