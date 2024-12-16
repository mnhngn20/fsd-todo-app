import { UserContextProvider } from '@/entities/user';
import { Header } from './ui/Header';

interface MainLayoutProps {
  children: JSX.Element;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <UserContextProvider>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />
        <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </UserContextProvider>
  );
}
