import React from 'react';
import { Home, Users, Calendar, FileText, LogOut } from 'lucide-react';

interface NavItemsProps {
  orientation: 'vertical' | 'horizontal';
}

export const NavItems: React.FC<NavItemsProps> = ({ orientation }) => {
  const baseClasses = orientation === 'vertical' 
    ? 'flex flex-col items-center space-y-6 p-4'
    : 'flex-1 flex flex-col items-center space-y-6';

  return (
    <nav className={baseClasses}>
      <button className="p-3 rounded-xl text-purple-600 hover:bg-purple-50 transition-colors">
        <Users className="w-6 h-6" />
      </button>
      <button className="p-3 rounded-xl text-gray-400 hover:bg-purple-50 transition-colors">
        <Calendar className="w-6 h-6" />
      </button>
      <button className="p-3 rounded-xl text-gray-400 hover:bg-purple-50 transition-colors">
        <FileText className="w-6 h-6" />
      </button>
      <button className="p-3 rounded-xl text-gray-400 hover:bg-red-50 hover:text-red-500 transition-colors mt-auto">
        <LogOut className="w-6 h-6" />
      </button>
    </nav>
  );
};