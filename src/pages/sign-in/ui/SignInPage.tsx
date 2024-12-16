import { useNavigate } from '@tanstack/react-router';
import { SignInForm, withGuardRoute } from '@/features/authenticate';
import { SignInResponse } from '@/entities/authentication';
import { useSetCurrentUser } from '@/entities/user';
import { ACCESS_TOKEN_LS_KEY } from '@/shared/constants';
import { useToast } from '@/shared/hooks';
import { localStorageSetItem } from '@/shared/lib';

function SignInPageContainer() {
  const { toast } = useToast();
  const setCurrentUser = useSetCurrentUser();
  const navigate = useNavigate();

  const onSignInSuccess = (resp: SignInResponse) => {
    const { accessToken, message, user } = resp;

    localStorageSetItem(ACCESS_TOKEN_LS_KEY, accessToken);

    toast({
      title: 'Success',
      description: message
    });

    setCurrentUser(user);

    navigate({
      to: '/',
      replace: true
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

export const SignInPage = withGuardRoute(SignInPageContainer);
