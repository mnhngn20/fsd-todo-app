import { useState } from 'react';
import { updateTask, UpdateTaskInput } from '@/entities/task';

export function useUpdateTask() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  const updateTaskFn = async (input: UpdateTaskInput) => {
    try {
      setLoading(true);
      return await updateTask(input);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  return [updateTaskFn, { loading, error }] as [
    typeof updateTaskFn,
    { loading: boolean; error: Error }
  ];
}
