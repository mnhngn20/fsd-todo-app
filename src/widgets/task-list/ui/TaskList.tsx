/* eslint-disable react/no-unescaped-entities */
import { Icon } from '@iconify/react';
import { CreateTaskModal } from '@/features/task/create';
import { useGetTasks } from '../api/useGetTasks';
import { TaskItem } from './TaskItem';

interface TaskListProps {
  isToday?: boolean;
}

export function TaskList({ isToday }: TaskListProps) {
  const { loading, refetch, tasks } = useGetTasks({
    isToday
  });

  if (loading) {
    return (
      <div className="flex h-[80vh] items-center justify-center">
        <Icon icon="line-md:loading-twotone-loop" />
      </div>
    );
  }

  if (!tasks?.length) {
    return (
      <div className="flex h-[80vh] flex-col justify-center items-center gap-2 text-md text-gray-900">
        <span>
          You don't have any tasks right now. Try to get a little bit busy,
          shall we?
        </span>
        <CreateTaskModal onCreateTaskSuccess={refetch} />
      </div>
    );
  }

  return (
    <div className="w-full h-[80vh] p-4 overflow-y-auto flex flex-col gap-2">
      <div className="flex justify-end">
        <CreateTaskModal onCreateTaskSuccess={refetch} />
      </div>
      <ul className="w-full space-y-4">
        {tasks?.map(task => (
          <TaskItem
            onToggleTaskCompletedSuccess={refetch}
            onDeleteTaskSuccess={refetch}
            onUpdateSuccess={refetch}
            task={task}
            key={task.id}
          />
        ))}
      </ul>
    </div>
  );
}
