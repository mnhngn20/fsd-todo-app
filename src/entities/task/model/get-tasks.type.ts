import { Task } from './task.type';

export type GetTasksInput = {
  page: number;
  limit: number;
  sort?: string;
};

export type GetTaskResponse = {
  message: string;
  success: boolean;
  items: Task[];
};
