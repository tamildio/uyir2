import React from 'react';

interface DashboardHeaderProps {
  doctorName: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ doctorName }) => {
  return (
    <header className="mb-8">
      <h1 className="text-xl lg:text-2xl font-semibold text-gray-900">
        Hi, Dr. {doctorName}
      </h1>
    </header>
  );
};

export default DashboardHeader;