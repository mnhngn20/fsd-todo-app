import { createFileRoute } from '@tanstack/react-router';
import { TodayTasksPage } from '@/pages/today-tasks';

export const Route = createFileRoute('/today-tasks')({
  component: TodayTasksPage
});
