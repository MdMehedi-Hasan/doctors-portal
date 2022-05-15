import React from "react";

const AvatarCard = () => {
  // console.log(props)
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <p className="p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          illum asperiores sequi cumque enim dolor omnis quasi similique vero
          facere.
        </p>
        <div className="card-body p-4 flex flex-row justify-between">
          <div className="avatar">
            <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 me-2">
              <img src="https://api.lorem.space/image/face?hash=3174" alt="" />
            </div>
          </div>
          <div>
            <h2 className="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarCard;
