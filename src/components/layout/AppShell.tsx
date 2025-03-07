
import React, { ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Home, MapPin, Calendar, Users, User } from 'lucide-react';

interface AppShellProps {
  children: ReactNode;
}

const AppShell: React.FC<AppShellProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: MapPin, label: 'Explore', path: '/explore' },
    { icon: Calendar, label: 'Stays', path: '/stays' },
    { icon: Users, label: 'Partners', path: '/partners' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-offbeat-cream">
      {/* Main Content */}
      <main className="flex-1 pb-20 overflow-hidden">
        <div className="page-enter">
          {children}
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 p-2 md:p-3 backdrop-blur-lg bg-opacity-80">
        <div className="max-w-md mx-auto flex justify-between items-center">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all duration-300 ${
                currentPath === item.path
                  ? 'text-offbeat-lime bg-offbeat-charcoal bg-opacity-10'
                  : 'text-gray-500 hover:text-offbeat-lime-dark'
              }`}
            >
              <item.icon className={`w-6 h-6 mb-1 ${
                currentPath === item.path
                  ? 'text-offbeat-lime'
                  : 'text-gray-500'
              }`} />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default AppShell;
