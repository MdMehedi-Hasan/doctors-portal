import React from "react";

const Card = ({image,title,description,bg,color}) => {
  return (
    <div className="py-8">
      <div className={`hero ${bg} rounded-lg`}>
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="w-14 h-14 rounded-lg" alt="" />
          <div>
            <h1 className={`font-bold uppercase ${color}`}>{title}</h1>
            <p className={`${color}`}>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
