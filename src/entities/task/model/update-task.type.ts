import { Task } from './task.type';

export type UpdateTaskInput = Partial<Task> & { id: string };
export type UpdateTaskResponse = {
  message: string;
  success: boolean;
};
