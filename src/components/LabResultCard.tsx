import React from 'react';

interface LabResult {
  name: string;
  value: string | number;
  unit?: string;
}

interface LabResultCardProps {
  patientImage: string;
  patientName: string;
  age: number;
  diagnosis: string;
  results: LabResult[];
}

const LabResultCard: React.FC<LabResultCardProps> = ({ patientImage, patientName, age, diagnosis, results }) => {
  return (
    <div className="bg-white p-4 rounded-xl mb-4">
      <div className="flex items-center space-x-3 mb-4">
        <img src={patientImage} alt={patientName} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <h3 className="font-medium text-gray-900">{patientName} · {age} yrs</h3>
          <p className="text-sm text-gray-500">Diagnosis: {diagnosis}</p>
        </div>
      </div>
      <div className="space-y-2">
        {results.map((result, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-gray-600">{result.name}</span>
            <span className="font-medium">
              {result.value} {result.unit}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabResultCard;