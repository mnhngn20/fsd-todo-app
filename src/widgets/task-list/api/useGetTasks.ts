import { useLayoutEffect, useState } from 'react';
import { getTasks, Task } from '@/entities/task';

interface Props {
  isToday?: boolean;
}

export function useGetTasks({ isToday }: Props) {
  const [loading, setLoading] = useState(false);
  const [refetching, setRefetching] = useState(false);
  const [tasks, setTasks] = useState<Task[] | undefined>(undefined);
  const [error, setError] = useState<unknown>();

  useLayoutEffect(() => {
    setLoading(true);
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setRefetching(true);
      const resp = await getTasks({ limit: 1000, page: 1 });
      if (resp.success) {
        setTasks(resp.items);
      }
    } catch (error) {
      setError(error);
    } finally {
      setRefetching(false);
      setLoading(false);
    }
  };

  return {
    tasks: isToday
      ? tasks?.filter(task => {
          if (!task.dueDate) return false;
          const today = new Date();
          return (
            task.dueDate.getDate() === today.getDate() &&
            task.dueDate.getMonth() === today.getMonth() &&
            task.dueDate.getFullYear() === today.getFullYear()
          );
        })
      : tasks,
    loading,
    error,
    refetch: fetchTasks,
    refetching
  };
}
