import React, { useState } from 'react';
import Sidebar from './components/layout/Sidebar';
import MobileMenu from './components/layout/MobileMenu';
import AppointmentsList from './components/dashboard/AppointmentsList';
import LabReportsList from './components/dashboard/LabReportsList';
import AIChat from './components/AIChat';
import Background from './components/Background';
import { appointments, labResults } from './data';

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Background />
      <Sidebar />
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
      />
      
      <div className="lg:pl-16">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 xl:px-12">
          <header className="mb-8 pt-8">
            <h1 className="text-xl lg:text-2xl font-semibold text-gray-900">
              Hi, Dr. Roberts Anderson
            </h1>
          </header>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <AppointmentsList appointments={appointments} />
            <LabReportsList labResults={labResults} />
          </div>
        </div>
      </div>

      <div className="pb-32 lg:pb-24">
        <AIChat />
      </div>
    </div>
  );
};

export default App;