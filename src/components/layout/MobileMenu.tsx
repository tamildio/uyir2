import React from 'react';
import { Menu, X } from 'lucide-react';
import { NavItems } from './NavItems';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onToggle }) => {
  return (
    <>
      <button 
        onClick={onToggle}
        className="lg:hidden fixed top-4 right-4 z-50 p-2 rounded-lg bg-white shadow-md"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
      
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-40 pt-20">
          <NavItems orientation="vertical" />
        </div>
      )}
    </>
  );
};

export default MobileMenu;