import React from 'react';
import LabResultCard from '../cards/LabResultCard';
import SectionHeader from './SectionHeader';
import { LabResult } from '../../types';

interface LabReportsListProps {
  labResults: LabResult[];
}

const LabReportsList: React.FC<LabReportsListProps> = ({ labResults }) => {
  return (
    <section>
      <SectionHeader title="Lab Reports" />
      <div className="space-y-4">
        {labResults.map((result, index) => (
          <LabResultCard key={index} {...result} />
        ))}
      </div>
    </section>
  );
};

export default LabReportsList;