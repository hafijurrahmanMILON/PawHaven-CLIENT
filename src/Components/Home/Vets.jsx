'use client';

import React from "react";
import Image from "next/image";
import { IoCalendarOutline, IoStar } from "react-icons/io5";
import vet1 from "../../assets/vetImage1.jpg";
import vet2 from "../../assets/vet2.jpg";
import vet3 from "../../assets/vet3.jpg";

const Vets = () => {
  const vets = [
    {
      id: 1,
      image: vet1,
      name: "Dr. Sarah Johnson",
      specialty: "Feline Immunity",
      experience: "12+ years",
      bio: "Specialized in feline health and winter wellness programs.",
      availability: "Mon, Wed, Fri"
    },
    {
      id: 2,
      image: vet2,
      name: "Dr. Michael Chen",
      specialty: "Pet Care Specialist",
      experience: "8+ years",
      bio: "Expert in seasonal pet care and preventive medicine.",
      availability: "Tue, Thu, Sat"
    },
    {
      id: 3,
      image: vet3,
      name: "Dr. Jennifer Smith",
      specialty: "Grooming Specialist",
      experience: "10+ years",
      bio: "Dedicated to keeping pets comfortable in cold weather.",
      availability: "Mon-Fri"
    }
  ];

  return (
    <section className="py-24  overflow-hidden">
      <div className="container mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <span className="text-primary text-lg">🐾</span>
            <span className="text-primary font-bold text-xs uppercase tracking-[0.2em]">Our Dedicated Team</span>
          </div>
          <h1 className="font-bold text-4xl md:text-6xl text-base-content mb-6 leading-tight">
            Meet Our Expert <br />
            <span className="text-primary relative inline-block">
              Veterinarians
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="#cb997e" strokeWidth="2" fill="none" opacity="0.3" />
              </svg>
            </span>
          </h1>
          <p className="text-base-content/60 text-lg md:text-xl">
            Compassionate care from experienced professionals dedicated to your pet&#39;s happiness.
          </p>
        </div>

        {/* Vets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
          {vets.map((vet) => (
            <div 
              key={vet.id}
              className="group relative bg-white rounded-[3rem] p-8 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(203,153,126,0.25)] border border-primary/5"
            >
              <div className="relative mb-8 flex justify-center">
                <div className="relative w-48 h-48">
                  <div className="absolute inset-0 bg-accent/20 rounded-[3rem] rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                  <div className="absolute inset-0 bg-primary/10 rounded-[3rem] -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>
                  <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border-4 border-white shadow-xl">
                    <Image
                      src={vet.image}
                      alt={vet.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center gap-1.5 bg-secondary px-3 py-1 rounded-full mb-4">
                  <IoStar className="text-primary text-xs" />
                  <span className="text-[10px] font-bold text-primary uppercase tracking-tighter">{vet.experience} Exp</span>
                </div>
                
                <h2 className="text-2xl font-black text-base-content mb-1 group-hover:text-primary transition-colors">
                  {vet.name}
                </h2>
                <p className="text-primary font-semibold text-sm mb-4 uppercase tracking-wider">
                  {vet.specialty}
                </p>
                <p className="text-base-content/60 text-sm leading-relaxed mb-8 line-clamp-2 italic">
                  {vet.bio}
                </p>

                <div className="bg-secondary/30 rounded-2xl p-4 mb-8 flex items-center justify-center gap-3">
                  <IoCalendarOutline className="text-primary text-xl" />
                  <div className="text-left">
                    <p className="text-[10px] uppercase font-bold text-primary/60 leading-none mb-1">Availability</p>
                    <p className="text-xs font-bold text-base-content">{vet.availability}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button className="btn btn-primary rounded-2xl border-0 shadow-lg shadow-primary/20 text-white font-bold hover:shadow-primary/40 transition-all active:scale-95">
                    Book Now
                  </button>
                  <button className="btn btn-outline border-primary/20 text-primary rounded-2xl hover:bg-primary hover:border-primary transition-all active:scale-95">
                    Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vets;