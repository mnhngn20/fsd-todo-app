import { delay } from '@/shared/lib';
import { RegisterInput, RegisterResponse } from '../model';

export async function register(
  input: RegisterInput
): Promise<RegisterResponse | undefined> {
  try {
    console.log('Register with input ', input);
    await delay(1000);
    return { success: true, message: 'Sign up successfully' };
  } catch (error) {
    console.error(error);
  }
}
