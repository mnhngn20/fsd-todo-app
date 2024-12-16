import { delay } from '@/shared/lib';
import { GetMeResponse } from '../model/get-me.type';

export async function getMe(): Promise<GetMeResponse | undefined> {
  console.log('Get me');
  await delay(1000);

  return {
    email: 'mnhngn20@gmail.com',
    firstName: 'Minh',
    id: '1',
    lastName: 'Nguyen'
  };
}
