/* eslint-disable @conarti/feature-sliced/layers-slices */
/** This is a cross import, refer to: https://feature-sliced.design/docs/reference/public-api#public-api-for-cross-imports */
import { User } from '@/entities/user/@x/authentication';

export interface Task {
  id: string;
  title: string;
  completed: boolean;
  dueDate: Date | null;
  owner: User;
  ownerId: string;
  createdAt: Date;
  updatedAt: Date;
  description: string;
}
