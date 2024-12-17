import { TaskList } from '@/widgets/task-list';
import { withGuardRoute } from '@/features/authenticate';

export function TodayTasksPageContainer() {
  return (
    <div className="w-full h-full flex flex-col">
      <h1 className="text-3xl font-bold px-4">Today Tasks</h1>
      <TaskList isToday />
    </div>
  );
}

export const TodayTasksPage = withGuardRoute(TodayTasksPageContainer, true);
