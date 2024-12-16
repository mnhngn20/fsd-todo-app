import { Icon } from '@iconify/react/dist/iconify.js';
import {
  Calendar,
  ChevronDown,
  ChevronUp,
  Clock,
  Trash2,
  User
} from 'lucide-react';
import { useState } from 'react';
import { useDeleteTask } from '@/features/task/delete';
import { useToggleTaskComplete } from '@/features/task/update';
import { Task } from '@/entities/task';
import { formatDate } from '@/shared/lib/date';
import { Button, Checkbox } from '@/shared/ui';

interface TaskItemProps {
  task: Task;
  onToggleTaskCompletedSuccess?: () => void;
  onDeleteTaskSuccess?: () => void;
}

export function TaskItem({
  task,
  onToggleTaskCompletedSuccess,
  onDeleteTaskSuccess
}: TaskItemProps) {
  const [completed, setCompleted] = useState(task.completed);
  const [toggleTaskComplete] = useToggleTaskComplete();

  const [isExpanded, setIsExpanded] = useState(false);

  const [deleteTask, { loading }] = useDeleteTask();

  return (
    <li className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3 flex-grow">
          <Checkbox
            id={`task-${task.id}`}
            checked={completed}
            onCheckedChange={async () => {
              toggleTaskComplete?.(task.id, !completed);
              setCompleted(!completed);
              onToggleTaskCompletedSuccess?.();
            }}
          />
          <div>
            <label
              htmlFor={`task-${task.id}`}
              className={`text-lg font-medium ${completed ? 'line-through text-gray-500' : 'text-gray-900'}`}
            >
              {task.title}
            </label>
            <p className="text-sm text-gray-500 mt-1">{task.description}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-label={
              isExpanded ? 'Collapse task details' : 'Expand task details'
            }
          >
            {isExpanded ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={async () => {
              await deleteTask?.({ id: task.id });
              onDeleteTaskSuccess?.();
            }}
            aria-label="Delete task"
          >
            {loading ? (
              <Icon icon="line-md:loading-twotone-loop" />
            ) : (
              <Trash2 className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
      {isExpanded && (
        <div className="px-4 pb-4 pt-2 bg-gray-50 text-sm text-gray-600">
          <div className="flex items-center space-x-2 mb-2">
            <Calendar className="h-4 w-4" />
            <span>
              Due Date:{' '}
              {task.dueDate ? formatDate(task.dueDate) : 'No due date'}
            </span>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <User className="h-4 w-4" />
            <span>
              Created By: {task.owner.firstName + task.owner.lastName}
            </span>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <Clock className="h-4 w-4" />
            <span>Created At: {formatDate(task.createdAt)}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4" />
            <span>Updated At: {formatDate(task.updatedAt)}</span>
          </div>
        </div>
      )}
    </li>
  );
}
