import { format } from "date-fns";
import React from "react";

const Modal = ({ name, slots, appointment }) => {
  return (
    <div>
      <label
        htmlFor="my-modal"
        className="btn modal-button btn-primary uppercase text-white"
      >
        Book Appointment
      </label>
      {/* <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <p>{name}</p>
          <form onSubmit={handleFormSubmit} className="flex flex-col items-center gap-4">
            <input
              type="text"
              value={format(appointment, "PPP")}
              className="input w-full max-w-xs input-bordered"
              disabled
            />
            <select className="select select-bordered w-full max-w-xs">
              {slots.map((slot) => (
                <option key={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Type here"
              className="input w-full max-w-xs input-bordered"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input w-full max-w-xs input-bordered"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input w-full max-w-xs input-bordered"
            />
            <input
              type="submit"
              value="Submit"
              htmlFor="my-modal"
              className="btn w-full max-w-xs mx-auto uppercase"
            />
          </form>
        </div>
      </div> */}
    </div>
  );
};

export default Modal;
