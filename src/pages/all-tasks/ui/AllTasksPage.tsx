import { TaskList } from '@/widgets/task-list';
import { withGuardRoute } from '@/features/authenticate';

export function AllTasksPageContainer() {
  return (
    <div className="w-full h-full flex flex-col">
      <h1 className="text-3xl font-bold mb-2 px-4">All Tasks</h1>
      <TaskList />
    </div>
  );
}

export const AllTasksPage = withGuardRoute(AllTasksPageContainer, true);
