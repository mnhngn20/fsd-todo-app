import { TASKS_LS_KEY } from '@/shared/constants';
import { delay, localStorageGetItem, localStorageSetItem } from '@/shared/lib';
import { DeleteTaskInput, DeleteTaskResponse } from '../model/delete-task.type';
import { Task } from '../model/task.type';

export async function deleteTask(
  input: DeleteTaskInput
): Promise<DeleteTaskResponse> {
  console.log('Delete task with input', input);
  await delay(1000);

  const tasks: Task[] = localStorageGetItem(TASKS_LS_KEY, []);
  localStorageSetItem(
    TASKS_LS_KEY,
    tasks.filter(i => i.id !== input.id)
  );
  return { message: 'Success', success: true };
}
