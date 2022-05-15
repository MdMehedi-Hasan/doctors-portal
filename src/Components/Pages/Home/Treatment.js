import React from "react";
import image from "../../../assets/images/treatment.png";

const Treatment = () => {
  return (
    <div>
      <div className="hero min-h-screen px-12">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} alt="" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
