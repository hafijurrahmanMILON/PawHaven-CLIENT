import React from "react";
import logo from "../assets/icons8-paw-100.png";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={logo} 
        alt="PawHaven Logo" 
       className="w-6 md:w-10"
      />

      <h1 className="font-extrabold text-xl md:text-3xl font-primary">
        <span className="text-primary font-primary">Paw</span>Haven
      </h1>
    </div>
  );
};

export default Logo;
