import { Link } from '@tanstack/react-router';
import { useIsAuthenticated } from '@/features/authenticate';
import { Button } from '@/shared/ui';
import { HeaderMenu } from './HeaderMenu';

export function Header() {
  const isAuthenticated = useIsAuthenticated();

  const renderNavigationButtons = () => {
    if (isAuthenticated) {
      return (
        <li>
          <HeaderMenu />
        </li>
      );
    }

    return (
      <>
        <li>
          <Button variant="ghost" asChild>
            <Link href="/sign-in">Sign In</Link>
          </Button>
        </li>
        <li>
          <Button asChild>
            <Link href="/sign-up">Sign Up</Link>
          </Button>
        </li>
      </>
    );
  };

  return (
    <header className="bg-white border-b h-[70px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              TaskMaster
            </Link>
          </div>
          <nav>
            <ul className="flex space-x-4">{renderNavigationButtons()}</ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
