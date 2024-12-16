import { useUpdateTask } from './useUpdateTask';

export function useToggleTaskComplete() {
  const [updateTask, params] = useUpdateTask();

  const toggleTaskComplete = (taskId: string, completed: boolean) =>
    updateTask({
      id: taskId,
      completed
    });

  return [toggleTaskComplete, params] as [
    typeof toggleTaskComplete,
    typeof params
  ];
}
