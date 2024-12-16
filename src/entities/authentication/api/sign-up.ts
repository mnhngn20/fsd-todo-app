import { delay } from '@/shared/lib';
import { SignUpInput, SignUpResponse } from '../model';

export async function signUp(
  input: SignUpInput
): Promise<SignUpResponse | undefined> {
  try {
    console.log('Register with input ', input);
    await delay(1000);
    return { success: true, message: 'Sign up successfully' };
  } catch (error) {
    console.error(error);
  }
}
