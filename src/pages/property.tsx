import React from "react";
import Image from "next/image";
import okala from "../../public/assests/okala1.png";
const property = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative"> 
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh]  bg-black/80 z-1  0">
            <Image className="absolute z-1" src={okala} layout="fill" objectFit="cover"  alt="/" />
        </div>
      </div>
    </div>
  );
};

export default property;
