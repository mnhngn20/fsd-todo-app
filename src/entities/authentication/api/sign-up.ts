import { delay } from '@/shared/lib';
import { SignUpInput, SignUpResponse } from '../model/sign-up.type';

export async function signUp(
  input: SignUpInput
): Promise<SignUpResponse | undefined> {
  try {
    console.log('Signed up with input ', input);
    await delay(1000);
    return { success: true, message: 'Signed up successfully' };
  } catch (error) {
    console.error(error);
  }
}
