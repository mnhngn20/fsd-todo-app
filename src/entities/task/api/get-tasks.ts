import { TASKS_LS_KEY } from '@/shared/constants';
import { delay, localStorageGetItem } from '@/shared/lib';
import { Task } from '../model';
import { GetTaskResponse, GetTasksInput } from '../model/get-tasks.type';

export async function getTasks(input: GetTasksInput): Promise<GetTaskResponse> {
  console.log('Get task with input', input);
  await delay(1000);

  const tasks: Task[] = localStorageGetItem(TASKS_LS_KEY, []);
  return { items: tasks, message: 'Success', success: true };
}
