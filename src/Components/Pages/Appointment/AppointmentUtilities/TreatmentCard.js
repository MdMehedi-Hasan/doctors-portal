import React from "react";
import Modal from "./Modal";

const TreatmentCard = ({ service,appointment }) => {
    const { name, slots } = service;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl text-center">
        <div className="card-body">
          <h2 className="text-2xl text-primary">{name}</h2>
          <p className={`${slots.length>0? 'text-black':'text-red-500'}`}>{slots.length>0? slots[0]:'No slots available'}</p>
          <div className="card-actions justify-center">
            <Modal key={slots} name = {name} slots={slots} appointment={appointment}></Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatmentCard;
