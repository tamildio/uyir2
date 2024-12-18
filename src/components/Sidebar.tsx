import React from 'react';
import { Home, Users, Calendar, FileText, LogOut } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="fixed left-0 h-screen w-16 bg-white shadow-lg flex flex-col items-center py-8 space-y-8">
      <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center">
        <Home className="text-white w-6 h-6" />
      </div>
      <nav className="flex-1 flex flex-col items-center space-y-6">
        <button className="p-3 rounded-xl text-purple-600 hover:bg-purple-50 transition-colors">
          <Users className="w-6 h-6" />
        </button>
        <button className="p-3 rounded-xl text-gray-400 hover:bg-purple-50 transition-colors">
          <Calendar className="w-6 h-6" />
        </button>
        <button className="p-3 rounded-xl text-gray-400 hover:bg-purple-50 transition-colors">
          <FileText className="w-6 h-6" />
        </button>
      </nav>
      <button className="p-3 rounded-xl text-gray-400 hover:bg-red-50 hover:text-red-500 transition-colors">
        <LogOut className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Sidebar;