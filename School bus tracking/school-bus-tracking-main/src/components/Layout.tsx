
import { useAuth } from '@/contexts/AuthContext';
import { useIsMobile } from '@/hooks/use-mobile';
import Sidebar from './Sidebar';
import MobileNav from './MobileNav';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { user } = useAuth();
  const isMobile = useIsMobile();

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50">
      {isMobile ? (
        <div className="flex flex-col h-screen">
          <main className="flex-1 overflow-y-auto pb-16">
            {children}
          </main>
          <MobileNav />
        </div>
      ) : (
        <div className="flex h-screen">
          <Sidebar />
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
      )}
    </div>
  );
};

export default Layout;
