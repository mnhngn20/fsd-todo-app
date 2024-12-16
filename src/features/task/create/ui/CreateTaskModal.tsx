/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { useGetCurrentUser } from '@/entities/user';
import { useToast } from '@/shared/hooks';
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label
} from '@/shared/ui';
import { Textarea } from '@/shared/ui/textarea';
import { useCreateTask } from '../hooks/useCreateTask';

interface Props {
  onCreateTaskSuccess?: () => void;
}

export function CreateTaskModal({ onCreateTaskSuccess }: Props) {
  const [open, setOpen] = useState(false);
  const [createTask, { loading }] = useCreateTask();

  const { toast } = useToast();

  const user = useGetCurrentUser();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const resp = await createTask({
        completed: false,
        createdAt: new Date(),
        description,
        dueDate: new Date(new Date().setDate(new Date().getDate() + 7)),
        owner: user!,
        ownerId: user.id,
        title,
        updatedAt: new Date()
      });

      if (resp?.success) {
        onCreateTaskSuccess?.();
        setOpen(false);
        setTitle('');
        setDescription('');
      }
    } catch {
      toast({
        title: 'Error',
        description: 'An error occurred'
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Create Task</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Task</DialogTitle>
          <DialogDescription>
            Make changes to your task here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form className="grid items-start gap-4" onSubmit={handleSubmit}>
          <div className="grid gap-2">
            <Label htmlFor="title">Task title</Label>
            <Input
              type="title"
              id="title"
              onChange={e => setTitle(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Task Description
            </label>
            <Textarea
              id="description"
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Enter task description"
              className="w-full"
            />
          </div>
          <Button type="submit" loading={loading}>
            Save changes
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
