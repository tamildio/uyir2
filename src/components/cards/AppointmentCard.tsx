import React from 'react';
import { Appointment } from '../../types';

const AppointmentCard: React.FC<Appointment> = ({ image, name, time, condition, isFirstVisit }) => {
  return (
    <div className="flex items-center justify-between p-3 hover:bg-white/50 rounded-xl transition-colors backdrop-blur-sm bg-white/30">
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