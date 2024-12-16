import { SignInForm } from '@/features/sign-in';
import { SignInResponse } from '@/entities/authentication';
import { ACCESS_TOKEN_LS_KEY } from '@/shared/constants';
import { useToast } from '@/shared/hooks';
import { localStorageSetItem } from '@/shared/lib';

export function SignInPage() {
  const { toast } = useToast();

  const onSignInSuccess = (resp: SignInResponse) => {
    const { accessToken, message } = resp;
    localStorageSetItem(ACCESS_TOKEN_LS_KEY, accessToken);
    toast({
      title: 'Success',
      description: message
    });
  };

  const onSignInError = () => {
    toast({
      title: 'Error',
      description: 'An error occurred'
    });
  };

  return (
    <SignInForm
      onSignInSuccess={onSignInSuccess}
      onSignInError={onSignInError}
    />
  );
}
