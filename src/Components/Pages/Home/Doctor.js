import React from "react";
import doctor from "../../../assets/images/doctor.png";
const Doctor = () => {
  return (
    <div>
      <div className="hero bg-secondary text-white">
        <div className="hero-content p-0 flex-col lg:flex-row">
          <img src={doctor} className="max-w-lg mt-[-100px]" alt="" />
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

export default Doctor;
