import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import TreatmentCard from './TreatmentCard';

const TreatmentSection = ({ appointment, setAppointment }) => {
    const [services,setServices]= useState([])
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='px-12'>
            <p className='text-2xl text-center text-primary'>Available Appointment on :{format(appointment, 'PPP')} </p>
            <div className='grid grid-cols-3 gap-4'>
            {
                services.map(service => <TreatmentCard service={service} key={service.name} appointment={appointment}></TreatmentCard>)
            }
            </div>
        </div>
    );
};

export default TreatmentSection;