'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import pawPrint from "../../assets/pawprint.png";

const WinterTips = () => {
  const [allTips, setAllTips] = useState([]);

  useEffect(() => {
    fetch("/WinterTips.json")
      .then((res) => res.json())
      .then((data) => setAllTips(data));
  }, []);

  return (
    <div className="py-16 mt-12">
      <div className="text-center mb-10">
        <h1 className="font-bold font-primary text-3xl md:text-5xl">
          Winter Wellness for Your Furry{" "}
          <span className="font-primary text-primary">Friends</span>
        </h1>
        <p className="text-sm md:text-base mt-3 font-second">
          Keep your furry friends warm, safe, and happy this winter season.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-6 lg:px-24">
        {allTips.map((tip) => (
          <div
            key={tip.id}
            className="relative bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 group overflow-hidden border-2 border-secondary"
          >
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <Image
                src={tip.icon}
                alt={tip.title}
                width={64}
                height={64}
                className="object-contain"
              />
            </div>

            {/* Title + Description */}
            <h3 className="text-lg font-bold font-primary text-primary">
              {tip.title}
            </h3>
            <p className="text-sm mt-1">{tip.description}</p>

            {/* PawPrint */}
            <Image
              src={pawPrint}
              alt="paw"
              width={32}
              height={32}
              className="absolute bottom-4 right-4 opacity-50"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WinterTips;
