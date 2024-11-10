import { RegisterInput, RegisterResponse } from '../model';
import { MockServer } from '@/mocks/mockServer';

export async function register(
  input: RegisterInput
): Promise<RegisterResponse | undefined> {
  try {
    const mockServer = new MockServer();

    const resp = await mockServer.register(input);

    return resp;
  } catch (error) {
    console.error(error);
  }
}
