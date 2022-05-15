import React from "react";
import image from "../../../assets/icons/quote.svg";

const Feedbacktop = () => {
  return (
    <div>
      <div className="hero-content p-0 flex-col lg:flex-row-reverse lg:justify-between items-start px-8">
        <img src={image} className="max-w-sm rounded-lg w-48" alt="" />
        <div>
          <h1 className="text-md font-bold mt-4 text-primary">Testimonial</h1>
          <p className="py-6 text-4xl">What Our Patient Says</p>
        </div>
      </div>
    </div>
  );
};

export default Feedbacktop;
