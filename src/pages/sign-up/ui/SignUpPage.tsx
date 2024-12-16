import { SignUpForm } from '@/features/sign-up';

export function SignUpPage() {
  const onSignUpSuccess = () => {};

  const onSignUpError = () => {};

  return (
    <SignUpForm
      onSignUpSuccess={onSignUpSuccess}
      onSignUpError={onSignUpError}
    />
  );
}
