import { TASKS_LS_KEY } from '@/shared/constants';
import { delay, localStorageGetItem, localStorageSetItem } from '@/shared/lib';
import { Task } from '../model';
import { CreateTaskInput, CreateTaskResponse } from '../model/create-task.type';

export async function createTask(
  task: CreateTaskInput
): Promise<CreateTaskResponse> {
  await delay(1000);

  const tasks: Task[] = localStorageGetItem(TASKS_LS_KEY, []);

  localStorageSetItem(TASKS_LS_KEY, [
    ...tasks,
    { ...task, id: new Date().toISOString() }
  ]);

  return {
    message: 'Success',
    success: true
  };
}
