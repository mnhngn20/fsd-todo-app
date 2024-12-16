/* eslint-disable @conarti/feature-sliced/layers-slices */
/** This is a cross import, refer to: https://feature-sliced.design/docs/reference/public-api#public-api-for-cross-imports */
import { User } from '@/entities/user/@x/authentication';

export type SignInInput = {
  email: string;
  password: string;
};

export type SignInResponse = {
  message: string;
  success: boolean;
  accessToken: string;
  user: User;
};
