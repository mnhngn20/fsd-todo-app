import { delay } from '@/shared/lib';
import { GetMeResponse } from '../model/get-me.type';

export async function getMe(): Promise<GetMeResponse | undefined> {
  await delay(1000);

  return {
    message: 'Success',
    success: true,
    user: {
      email: 'mnhngn20@gmail.com',
      firstName: 'Minh',
      id: '1',
      lastName: 'Nguyen'
    }
  };
}
