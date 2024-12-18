import React from 'react';

interface AppointmentProps {
  image: string;
  name: string;
  time: string;
  condition: string;
  isFirstVisit?: boolean;
}

const AppointmentCard: React.FC<AppointmentProps> = ({ image, name, time, condition, isFirstVisit }) => {
  return (
    <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors">
      <div className="flex items-center space-x-3">
        <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <h3 className="font-medium text-gray-900">{name}</h3>
          <p className="text-sm text-gray-500">
            {isFirstVisit ? "First visit" : condition}
          </p>
        </div>
      </div>
      <span className="text-purple-600 font-medium">{time}</span>
    </div>
  );
};

export default AppointmentCard;