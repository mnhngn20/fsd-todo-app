import { useState } from 'react';
import { deleteTask, DeleteTaskInput } from '@/entities/task';

export function useDeleteTask() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  const deleteTaskFn = async (input: DeleteTaskInput) => {
    try {
      setLoading(true);
      return await deleteTask(input);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  return [deleteTaskFn, { loading, error }] as [
    typeof deleteTaskFn,
    { loading: boolean; error: Error }
  ];
}
