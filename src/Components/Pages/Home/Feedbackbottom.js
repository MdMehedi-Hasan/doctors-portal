import React from "react";
import image1 from "../../../assets/images/people2.png";
import image2 from "../../../assets/images/people1.png";
import image3 from "../../../assets/images/people3.png";
import AvatarCard from "./AvatarCard";

const Feedbackbottom = () => {
  const feedbackData = [
    {
      _id: "1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus illum asperiores sequi cumque enim dolor omnis quasi similique vero facere.",
      image: `${image1}`
    },
    {
      _id: "1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus illum asperiores sequi cumque enim dolor omnis quasi similique vero facere.",
      image: `${image2}`
    },
    {
      _id: "1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus illum asperiores sequi cumque enim dolor omnis quasi similique vero facere.",
      image: `${image3}`
    }
  ];
  return (
    <div className="my-4 grid grid-cols-3 gap-8 py-12 px-12">
        {
            // feedbackData?.map(feedback => console.log(feedback))
        }
          <AvatarCard></AvatarCard>
          <AvatarCard></AvatarCard>
          <AvatarCard></AvatarCard>
    </div>
  );
};

export default Feedbackbottom;
