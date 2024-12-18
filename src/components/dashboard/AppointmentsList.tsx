import React from 'react';
import AppointmentCard from '../cards/AppointmentCard';
import SectionHeader from './SectionHeader';
import { Appointment } from '../../types';

interface AppointmentsListProps {
  appointments: Appointment[];
}

const AppointmentsList: React.FC<AppointmentsListProps> = ({ appointments }) => {
  return (
    <section className="mb-8 lg:mb-0">
      <SectionHeader title="Today's Appointments" />
      <div className="bg-white rounded-xl shadow-sm p-4 space-y-4">
        {appointments.map((appointment, index) => (
          <AppointmentCard key={index} {...appointment} />
        ))}
        <div className="text-center pt-2">
          <span className="text-purple-600 text-sm">2 new request</span>
        </div>
      </div>
    </section>
  );
};

export default AppointmentsList;