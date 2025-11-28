import Image from "next/image";
import React from "react";
import hero from "../../assets/heroIMG.png";

const Hero = () => {
  return (
    <section
      className=" w-full bg-cover bg-center bg-no-repeat bg-secondary"
    >

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-6 py-20">
        <div className=" text-center md:text-left">
          <h1 className="font-bold font-primary text-3xl md:text-5xl text-base-content">
            The Best Care for Your Best Friend
          </h1>
          <p className="mt-4 text-base md:text-lg max-w-lg">
            At PawHaven, we provide exceptional care and services for your pets,
            including grooming, boarding, and walking. Trust us to ensure your
            furry friends are happy.
          </p>
          <button className="btn btn-primary mt-6 rounded-full">Explore Services</button>
        </div>

        <div className="">
          <Image
            src={hero}
            alt="Hero Banner"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
