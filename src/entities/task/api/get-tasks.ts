import { TASKS_LS_KEY } from '@/shared/constants';
import { delay, localStorageGetItem } from '@/shared/lib';
import { GetTaskResponse, GetTasksInput } from '../model/get-tasks.type';
import { Task } from '../model/task.type';

export async function getTasks(input: GetTasksInput): Promise<GetTaskResponse> {
  console.log('Get task with input', input);
  await delay(1000);

  const tasks: Task[] = localStorageGetItem(TASKS_LS_KEY, []);
  return {
    items: tasks.map(task => ({
      ...task,
      createdAt: new Date(task.createdAt),
      dueDate: task.dueDate ? new Date(task.dueDate) : new Date(),
      updatedAt: new Date(task.updatedAt)
    })),
    message: 'Success',
    success: true
  };
}
