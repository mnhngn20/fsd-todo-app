import { TaskList } from '@/widgets/task-list';
import { withGuardRoute } from '@/features/authenticate';

function AllTasksPageContainer() {
  return (
    <div className="w-full h-full flex flex-col">
      <h1 className="text-3xl font-bold px-4">All Tasks</h1>
      <TaskList />
    </div>
  );
}

export const AllTasksPage = withGuardRoute(AllTasksPageContainer, true);
