import React from 'react';
import { Home } from 'lucide-react';
import { NavItems } from './NavItems';

const Sidebar = () => {
  return (
    <div className="hidden lg:flex fixed left-0 h-screen w-16 backdrop-blur-md bg-white/70 shadow-lg flex-col items-center py-8 space-y-8">
      <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center">
        <Home className="text-white w-6 h-6" />
      </div>
      <NavItems orientation="vertical" />
    </div>
  );
};

export default Sidebar;