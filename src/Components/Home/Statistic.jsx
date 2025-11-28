"use client";

import React from "react";
import Image from "next/image";
import happyClients from "../../assets/customer-review.png";
import award from "../../assets/trophy.png";
import adopt from "../../assets/adopt.png";
import professional from "../../assets/medical.png";

const Statistic = () => {
  return (
    <section
      className="bg-gradient-to-br from-[#c163c9] to-[#7a2ca0]
 text-center p-10"
    >
      <h1 className="text-4xl font-semibold text-white mb-8">
        Trusted by Worldwide Pet Lovers
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-14 lg:px-64 justify-center items-center">
        {/* Happy Clients */}
        <div className="py-8 flex justify-center items-center flex-col">
          <Image src={happyClients} alt="Happy Clients" className="w-16 h-16" />
          <h1 className="text-white text-5xl font-bold my-3">750+</h1>
          <p className="text-white font-semibold">Happy Clients</p>
        </div>

        {/* Awards */}
        <div className="py-8 flex flex-col justify-center items-center">
          <Image src={award} alt="Awards" className="w-16 h-16" />
          <h1 className="text-white text-5xl font-bold my-3">74+</h1>
          <p className="text-white font-semibold">Awards</p>
        </div>

        {/* Adopted Pets */}
        <div className="py-8 flex flex-col justify-center items-center">
          <Image src={adopt} alt="Adopted Pets" className="w-16 h-16" />
          <h1 className="text-white text-5xl font-bold my-3">850+</h1>
          <p className="text-white font-semibold">Adopted Pets</p>
        </div>

        {/* Professionals */}
        <div className="py-8 flex flex-col justify-center items-center">
          <Image src={professional} alt="Professionals" className="w-16 h-16" />
          <h1 className="text-white text-5xl font-bold my-3">20+</h1>
          <p className="text-white font-semibold">Professionals</p>
        </div>
      </div>
    </section>
  );
};

export default Statistic;
