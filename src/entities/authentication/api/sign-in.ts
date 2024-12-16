import { delay } from '@/shared/lib';
import { SignInInput, SignInResponse } from '../model/sign-in.type';

export async function signIn(
  input: SignInInput
): Promise<SignInResponse | undefined> {
  console.log('Signed In with input ', input);
  await delay(1000);
  return {
    accessToken:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
    message: 'Signed In Successfully',
    success: true,
    user: {
      email: 'mnhngn20@gmail.com',
      firstName: 'Minh',
      id: '1',
      lastName: 'Nguyen'
    }
  };
}
