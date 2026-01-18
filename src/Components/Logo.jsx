import React from "react";
import logo from "../assets/PawHaven-Photoroom.png";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center gap-1">
      <Image
        src={logo} 
        alt="PawHaven Logo"
        className="w-12"
      />

      <h1 className="font-extrabold text-xl md:text-3xl font-primary">
        <span className="text-primary font-primary">Paw</span>Haven
      </h1>
    </div>
  );
};

export default Logo;
