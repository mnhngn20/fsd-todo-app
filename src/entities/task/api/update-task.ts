import { TASKS_LS_KEY } from '@/shared/constants';
import { delay, localStorageGetItem, localStorageSetItem } from '@/shared/lib';
import { Task } from '../model';
import { UpdateTaskInput, UpdateTaskResponse } from '../model/update-task.type';

export async function updateTask(
  task: UpdateTaskInput
): Promise<UpdateTaskResponse> {
  await delay(1000);

  const tasks: Task[] = localStorageGetItem(TASKS_LS_KEY, []);

  localStorageSetItem(
    TASKS_LS_KEY,
    tasks.map(i => (i.id === task.id ? { ...i, ...task } : i))
  );

  return {
    message: 'Success',
    success: true
  };
}
