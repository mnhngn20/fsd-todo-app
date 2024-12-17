import { Icon } from '@iconify/react/dist/iconify.js';
import { useNavigate } from '@tanstack/react-router';
import { LogoutButton } from '@/features/authenticate';
import { useGetCurrentUser } from '@/entities/user';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/shared/ui';

export function HeaderMenu() {
  const navigate = useNavigate();
  const currentUser = useGetCurrentUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex gap-2 items-center hover:cursor-pointer">
          <Avatar className="h-9 w-9">
            <AvatarImage
              src="/placeholder.svg?height=32&width=32"
              alt={currentUser?.name ?? ''}
            />
            <AvatarFallback>{currentUser?.name?.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-start">
            <div className="text-sm font-medium">{currentUser?.name}</div>
            <div className="text-xs text-gray-500">{currentUser?.email}</div>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuItem
          className="flex-col items-start"
          onClick={() =>
            navigate({
              to: '/all-tasks'
            })
          }
        >
          <Button variant="ghost" size="sm">
            <Icon fontSize={10} icon="line-md:account" />
            Manage Profile
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex-col items-start"
          onClick={() =>
            navigate({
              to: '/today-tasks'
            })
          }
        >
          <Button variant="ghost" size="sm">
            <Icon fontSize={10} icon="line-md:calendar" />
            Today Tasks
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex-col items-start"
          onClick={() =>
            navigate({
              to: '/all-tasks'
            })
          }
        >
          <Button variant="ghost" size="sm">
            <Icon fontSize={10} icon="line-md:check-list-3-filled" />
            All Tasks
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LogoutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
