import { createFileRoute } from '@tanstack/react-router';
import { AllTasksPage } from '@/pages/all-tasks';

export const Route = createFileRoute('/all-tasks')({
  component: AllTasksPage
});
