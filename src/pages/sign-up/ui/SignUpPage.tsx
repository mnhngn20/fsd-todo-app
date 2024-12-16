import { useNavigate } from '@tanstack/react-router';
import { SignUpForm, withGuardRoute } from '@/features/authenticate';
import { SignUpResponse } from '@/entities/authentication';
import { useToast } from '@/shared/hooks';

function SignUpPageContainer() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const onSignUpSuccess = (resp: SignUpResponse) => {
    const { message } = resp;
    toast({
      title: 'Success',
      description: message
    });

    navigate({
      to: '/'
    });
  };

  const onSignUpError = () => {
    toast({
      title: 'Error',
      description: 'An error occurred'
    });
  };

  return (
    <SignUpForm
      onSignUpSuccess={onSignUpSuccess}
      onSignUpError={onSignUpError}
    />
  );
}

export const SignUpPage = withGuardRoute(SignUpPageContainer);
