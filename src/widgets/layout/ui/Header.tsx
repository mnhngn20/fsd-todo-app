import { Link } from '@tanstack/react-router';
import { Button } from '@/shared/ui';
import { HeaderMenu } from './HeaderMenu';

export function Header() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              MyApp
            </Link>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Button variant="ghost" asChild>
                  <Link href="/about">About</Link>
                </Button>
              </li>
              <li>
                <Button variant="ghost" asChild>
                  <Link href="/contact">Contact</Link>
                </Button>
              </li>
              <li>
                <HeaderMenu />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
