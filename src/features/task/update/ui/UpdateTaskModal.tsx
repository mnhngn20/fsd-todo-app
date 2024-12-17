import { Edit } from 'lucide-react';
import { useState } from 'react';
import { Task } from '@/entities/task';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  Button,
  Input,
  Label,
  Textarea,
  DialogTrigger,
  DatePicker
} from '@/shared/ui';
import { useUpdateTask } from '../hooks/useUpdateTask';

interface UpdateTaskModalProps {
  task: Task;
  onUpdateSuccess?: () => void;
}

export function UpdateTaskModal({
  task,
  onUpdateSuccess
}: UpdateTaskModalProps) {
  const [open, setOpen] = useState(false);
  const [updatedTask, setUpdatedTask] = useState<Task>({ ...task });

  const [updateTask, { loading }] = useUpdateTask();

  const handleUpdate = async () => {
    await updateTask({ ...updatedTask, updatedAt: new Date() });
    onUpdateSuccess?.();
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={open => {
        setOpen(open);
        setUpdatedTask(task);
      }}
    >
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" aria-label="Edit task">
          <Edit className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update Task</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input
              id="title"
              value={updatedTask.title}
              onChange={e =>
                setUpdatedTask({ ...updatedTask, title: e.target.value })
              }
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Textarea
              id="description"
              value={updatedTask.description}
              onChange={e =>
                setUpdatedTask({ ...updatedTask, description: e.target.value })
              }
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="dueDate" className="text-right">
              Due Date
            </Label>
            <DatePicker
              value={updatedTask.dueDate}
              onChange={date => setUpdatedTask({ ...task, dueDate: date })}
            />
          </div>
        </div>
        <DialogFooter>
          <Button loading={loading} type="submit" onClick={handleUpdate}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
