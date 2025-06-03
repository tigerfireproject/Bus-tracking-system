
import { useAuth } from '@/contexts/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, MapPin, School, Bus, Bell } from 'lucide-react';
import { cn } from '@/lib/utils';

const MobileNav = () => {
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const navigationItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: MapPin, label: 'Map', path: '/map' },
    { icon: School, label: 'Student', path: '/student-info', roles: ['parent'] },
    { icon: Bus, label: 'Routes', path: '/routes' },
    { icon: Bell, label: 'Alerts', path: '/notifications' },
  ];

  const filteredItems = navigationItems.filter(item => 
    !item.roles || item.roles.includes(user?.role || '')
  );

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-blue-100 px-2 py-2 z-50">
      <div className="flex justify-around">
        {filteredItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.path}
              className={cn(
                "flex flex-col items-center space-y-1 p-2 rounded-lg transition-colors min-w-0",
                isActive 
                  ? "text-blue-600 bg-blue-50" 
                  : "text-gray-600"
              )}
              onClick={() => navigate(item.path)}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-xs font-medium truncate">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MobileNav;
