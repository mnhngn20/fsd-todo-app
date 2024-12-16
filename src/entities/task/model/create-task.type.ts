import { Task } from './task.type';

export type CreateTaskInput = Omit<Task, 'id'>;
export type CreateTaskResponse = {
  message: string;
  success: boolean;
};
