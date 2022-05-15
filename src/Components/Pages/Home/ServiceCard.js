import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={service.image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{service.title}</h2>
          <p>{service.describe}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
