import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "./AppointmentBanner.css";
import image from "../../../../assets/images/chair.png";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({ appointment, setAppointment }) => {
  return (
    <div>
      <div className="hero min-h-screen cstm">
        <div className="hero-content w-full flex-col lg:flex-row-reverse justify-around">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" alt="" />
          <div>
            <DayPicker
              mode="single"
              selected={appointment}
              onSelect={setAppointment}
            ></DayPicker>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
