import React from "react";
import Card from "./Card";
import Homeheader from "./Homeheader";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import service1 from "../../../assets/images/fluoride.png"
import service2 from "../../../assets/images/cavity.png"
import service3 from "../../../assets/images/whitening.png"
import ServiceCard from "./ServiceCard";
import Treatment from "./Treatment";
import Doctor from "./Doctor";
import Feedback from "./Feedback";
import Contact from "./Contact";

const Home = () => {
  const data = [
    {
      _id: "1",
      title: "Fluoride Treatment",
      image:`${service1}`,
      describe: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      _id: "2",
      title: "Cavity Filling",
      image:`${service2}`,
      describe: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      _id: "3",
      title: "Teeth Whitening",
      image:`${service3}`,
      describe: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  ];

  return (
    <div className="">
      <Homeheader></Homeheader>
      <div className="container grid lg:grid-cols-3 gap-8 px-12">
        <Card
          image={clock}
          title="opening hours"
          description="We are open from 9 am to 8 pm"
          bg="bg-primary"
          color="text-white"
        ></Card>
        <Card
          image={marker}
          title="visit our location"
          description="27/9 domvigli,ireland"
          bg="bg-secondary"
          color="text-white"
        ></Card>
        <Card
          image={phone}
          title="contact us now"
          description="+082788633113"
          bg="bg-primary"
          color="text-white"
        ></Card>
      </div>
      <section className="text-center p-12">
        <h4>Our services</h4>
        <h1>Services We Provide</h1>
        <div className="grid grid-cols-3 gap-8"> 
            
        {
            data.map(service => <ServiceCard service={service} key={service._id}></ServiceCard>)
        }
        </div>
        
          </section>
          <section>
              <Treatment></Treatment>
          </section>
          <section className="py-12">
              <Doctor></Doctor>
      </section>
      <section>
        <Feedback></Feedback>
      </section>
      <section>
        <Contact></Contact>
      </section>
    </div>
  );
};

export default Home;
