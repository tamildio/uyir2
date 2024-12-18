import React from 'react';

interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-xl font-medium text-gray-900">{title}</h2>
      <button className="text-purple-600 text-sm font-medium hover:underline">
        View all
      </button>
    </div>
  );
};

export default SectionHeader;