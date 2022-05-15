import React from "react";
import image from "../../../assets/images/chair.png";
import "./Homeheader.css";

const Homeheader = () => {
  return (
    <div className="background-image">
      <div
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "rgb(255 255 255 / 95%)",
        }}
        className="hero min-h-screen px-12"
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" alt="" />
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

export default Homeheader;
