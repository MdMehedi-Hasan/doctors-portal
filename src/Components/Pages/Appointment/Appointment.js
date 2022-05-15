import React, { useState } from 'react';
import AppointmentBanner from './AppointmentUtilities/AppointmentBanner';
import TreatmentSection from './AppointmentUtilities/TreatmentSection';

const Appointment = () => {
    const [appointment, setAppointment] = useState(new Date())
    return (
        <div>
            <AppointmentBanner appointment={appointment} setAppointment={setAppointment}></AppointmentBanner>
            <TreatmentSection appointment={appointment} setAppointment={setAppointment}></TreatmentSection>
        </div>
    );
};

export default Appointment;