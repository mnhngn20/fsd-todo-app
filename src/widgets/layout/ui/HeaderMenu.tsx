import { Icon } from '@iconify/react/dist/iconify.js';
import { LogoutButton } from '@/features/authenticate';
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
  const user = {
    name: 'Minh Nguyen',
    email: 'mnhngn20@gmail.com'
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex gap-2 items-center hover:cursor-pointer">
          <Avatar className="h-9 w-9">
            <AvatarImage
              src="/placeholder.svg?height=32&width=32"
              alt={user.name}
            />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-start">
            <div className="text-sm font-medium">{user.name}</div>
            <div className="text-xs text-gray-500">{user.email}</div>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuItem className="flex-col items-start">
          <Button variant="ghost" size="sm">
            <Icon fontSize={10} icon="line-md:account" />
            Manage Profile
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex-col items-start">
          <Button variant="ghost" size="sm">
            <Icon fontSize={10} icon="line-md:check-list-3-filled" />
            Manage Task
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LogoutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
