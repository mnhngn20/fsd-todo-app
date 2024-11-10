import { LoginInput, LoginResponse } from '../model/login.type';
import { MockServer } from '@/mocks/mockServer';

export async function login(
  input: LoginInput
): Promise<LoginResponse | undefined> {
  const mockServer = new MockServer();
  const resp = await mockServer.login(input);
  return resp;
}
