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
    <section className="py-20 bg-white">
      <div className=" px-6 lg:px-20">
        
        {/* Header Section */}
        <div className="text-center  mb-16">
          <div className="inline-block px-4 py-1.5 bg-secondary rounded-full text-primary font-bold text-xs uppercase tracking-widest mb-4">
            ❄️ Seasonal Guide
          </div>
          <h1 className="font-bold text-4xl md:text-5xl text-base-content leading-tight">
            Winter Wellness for Your <br />
            <span className="text-primary italic">Furry Friends</span>
          </h1>
          <p className="text-base-content/60 mt-4 text-lg">
            Winter can be tough for pets. Follow our expert tips to keep them <br className="hidden md:block" /> 
            warm, safe, and happy throughout the cold season.
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {allTips.map((tip) => (
            <div
              key={tip.id}
              className="group relative bg-base-100 rounded-[2.5rem] p-8 border border-primary/10 transition-all duration-500 hover:shadow-[0_25px_60px_-15px_rgba(203,153,126,0.2)] hover:-translate-y-3 overflow-hidden"
            >
              {/* Background Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon with Floating Animation */}
              <div className="relative z-10 flex justify-center mb-6">
                <div className="w-20 h-20 flex items-center justify-center rounded-3xl bg-secondary/50 group-hover:bg-secondary group-hover:rotate-6 transition-all duration-500">
                  <img
                    src={tip.icon} // JSON থেকে আসা আইকন
                    alt={tip.title}
                    className="w-12 h-12 object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Title + Description */}
              <div className="relative z-10 text-center">
                <h3 className="text-xl font-bold text-primary mb-3">
                  {tip.title}
                </h3>
                <p className="text-base-content/70 text-sm leading-relaxed mb-4">
                  {tip.description}
                </p>
              </div>

              {/* PawPrint Decor - Bottom Right */}
              <div className="absolute bottom-4 right-4 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
                <Image
                  src={pawPrint}
                  alt="paw"
                  width={32}
                  height={32}
                  className="opacity-10 group-hover:opacity-30 transition-opacity grayscale group-hover:grayscale-0"
                />
              </div>

              {/* Corner Decorative Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-accent/10 rounded-bl-[4rem] -mr-8 -mt-8 group-hover:mr-0 group-hover:mt-0 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WinterTips;