/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { Task } from '@/entities/task';
import { useGetCurrentUser } from '@/entities/user';
import { useToast } from '@/shared/ui';
import {
  Button,
  DatePicker,
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
  Textarea
} from '@/shared/ui';
import { useCreateTask } from '../model/useCreateTask';

interface Props {
  onCreateTaskSuccess?: () => void;
}

export function CreateTaskModal({ onCreateTaskSuccess }: Props) {
  const [open, setOpen] = useState(false);
  const [newTask, setNewTask] = useState<Partial<
    Omit<Task, 'id' | 'completed' | 'createdAt' | 'updatedAt'>
  > | null>(null);
  const [createTask, { loading }] = useCreateTask();

  const { toast } = useToast();

  const user = useGetCurrentUser();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const resp = await createTask({
        ...newTask,
        completed: false,
        createdAt: new Date(),
        description: newTask?.description ?? '',
        dueDate:
          newTask?.dueDate ??
          new Date(new Date().setDate(new Date().getDate() + 2)),
        owner: user!,
        ownerId: user?.id ?? '',
        title: newTask?.description ?? '',
        updatedAt: new Date()
      });

      if (resp?.success) {
        onCreateTaskSuccess?.();
        setOpen(false);
        setNewTask(null);
      }
    } catch {
      toast({
        title: 'Error',
        description: 'An error occurred'
      });
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={open => {
        setOpen(open);
        setNewTask(null);
      }}
    >
      <DialogTrigger asChild>
        <Button variant="outline" onClick={() => setOpen(true)}>
          Create Task
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Task</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input
              id="title"
              value={newTask?.title}
              onChange={e => setNewTask({ ...newTask, title: e.target.value })}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Textarea
              id="description"
              value={newTask?.description}
              onChange={e =>
                setNewTask({ ...newTask, description: e.target.value })
              }
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="dueDate" className="text-right">
              Due Date
            </Label>
            <DatePicker
              value={newTask?.dueDate}
              onChange={date => setNewTask({ ...newTask, dueDate: date })}
            />
          </div>
        </div>
        <DialogFooter>
          <Button loading={loading} type="submit" onClick={handleSubmit}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
