
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Settings, LogOut, Bell, Shield, HelpCircle, Heart, MapPin } from 'lucide-react';

const ProfileScreen: React.FC = () => {
  const navigate = useNavigate();
  const [userName] = useState(localStorage.getItem('userName') || 'Traveler');
  
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userName');
    navigate('/auth');
  };

  const menuItems = [
    { icon: Settings, label: 'Account Settings', link: '/settings' },
    { icon: Bell, label: 'Notifications', link: '/notifications' },
    { icon: Shield, label: 'Privacy & Security', link: '/privacy' },
    { icon: HelpCircle, label: 'Help & Support', link: '/help' },
    { icon: LogOut, label: 'Log Out', action: handleLogout }
  ];

  return (
    <div className="px-4 py-6 max-w-7xl mx-auto">
      {/* Profile Header */}
      <div className="flex items-center mb-8">
        <div className="w-20 h-20 rounded-full bg-offbeat-lime flex items-center justify-center mr-4">
          <User size={36} className="text-offbeat-charcoal" />
        </div>
        <div>
          <h1 className="heading-md text-offbeat-charcoal">{userName}</h1>
          <p className="text-gray-600 flex items-center">
            <MapPin size={14} className="text-offbeat-lime mr-1" />
            Travel enthusiast
          </p>
        </div>
      </div>
      
      {/* Favorites */}
      <div className="mb-8">
        <h2 className="font-semibold text-lg mb-4 flex items-center">
          <Heart size={18} className="text-offbeat-lime mr-2" />
          Your Favorites
        </h2>
        
        <div className="glass-card p-6 rounded-2xl">
          <p className="text-center text-gray-500 py-4">
            You haven't saved any favorites yet. Explore destinations and homestays to add to your favorites!
          </p>
          <button
            onClick={() => navigate('/explore')}
            className="w-full btn-primary mt-2"
          >
            Explore Now
          </button>
        </div>
      </div>
      
      {/* Menu */}
      <div className="mb-8">
        <h2 className="font-semibold text-lg mb-4">Account</h2>
        
        <div className="space-y-1 rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={item.action || (() => navigate(item.link))}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-all duration-300"
            >
              <div className="flex items-center">
                <item.icon size={18} className="text-offbeat-lime mr-3" />
                <span className="font-medium">{item.label}</span>
              </div>
              {!item.action && (
                <span className="text-gray-400">›</span>
              )}
            </button>
          ))}
        </div>
      </div>
      
      {/* App Info */}
      <div className="text-center text-gray-500 text-sm mt-8">
        <p>Offbeat Travel App</p>
        <p>Version 1.0.0</p>
      </div>
    </div>
  );
};

export default ProfileScreen;
