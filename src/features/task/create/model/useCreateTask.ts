import { useState } from 'react';
import { createTask, CreateTaskInput } from '@/entities/task';

export function useCreateTask() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  const createTaskFn = async (input: CreateTaskInput) => {
    try {
      setLoading(true);
      return await createTask(input);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  return [createTaskFn, { loading, error }] as [
    typeof createTaskFn,
    { loading: boolean; error: Error }
  ];
}
