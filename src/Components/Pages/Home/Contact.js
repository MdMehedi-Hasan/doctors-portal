import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center bg-slate-600 py-12">
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered input-xs w-full max-w-xs mb-3"
      />
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered input-sm w-full max-w-xs mb-3"
      />

      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered input-md w-full max-w-xs mb-3"
      />

      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered input-lg w-full max-w-xs mb-3"
      />
      <button className="btn-primary px-6 py-2 rounded text-white">
        Submit
      </button>
    </div>
  );
};

export default Contact;
