"use client";

import React from "react";
import Image from "next/image";
import happyClients from "../../assets/customer-review.png";
import award from "../../assets/trophy.png";
import adopt from "../../assets/adopt.png";
import professional from "../../assets/medical.png";

const Statistic = () => {
  const stats = [
    { icon: happyClients, count: "750+", label: "Happy Clients" },
    { icon: award, count: "74+", label: "Awards Won" },
    { icon: adopt, count: "850+", label: "Adopted Pets" },
    { icon: professional, count: "20+", label: "Professionals" },
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-secondary/30">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/4 translate-y-1/4"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Our Impact</h2>
          <h1 className="text-3xl md:text-5xl font-bold text-base-content leading-tight">
            Trusted by Worldwide <span className="text-primary italic">Pet Lovers</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group bg-white/50 backdrop-blur-sm border border-primary/10 p-10 rounded-[2.5rem] flex flex-col items-center text-center transition-all duration-500 hover:bg-white hover:shadow-[0_20px_50px_rgba(203,153,126,0.12)] hover:-translate-y-2"
            >
              {/* Icon Container */}
              <div className="w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:rotate-[10deg] shadow-sm">
                <Image 
                  src={stat.icon} 
                  alt={stat.label} 
                  className="w-12 h-12 object-contain" 
                />
              </div>

              {/* Count */}
              <h2 className="text-4xl md:text-5xl font-black text-primary mb-2 tracking-tight transition-all duration-300">
                {stat.count}
              </h2>

              {/* Label */}
              <p className="text-base-content/70 font-medium text-lg">
                {stat.label}
              </p>

              {/* Subtle accent line */}
              <div className="w-8 h-1 bg-accent/30 mt-4 rounded-full group-hover:w-16 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistic;