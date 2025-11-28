'use client';

import React from "react";
import Image from "next/image";
import vet1 from "../../assets/vetImage1.jpg";
import vet2 from "../../assets/vet2.jpg";
import vet3 from "../../assets/vet3.jpg";

const Vets = () => {
  const vets = [
    {
      id: 1,
      image: vet1,
      name: "Dr. Sarah Johnson",
      specialty: "Feline Immunity & Winter Wellness",
      experience: "12+ years",
      bio: "Specialized in feline health and winter wellness programs",
      availability: "Mon, Wed, Fri"
    },
    {
      id: 2,
      image: vet2,
      name: "Dr. Michael Chen",
      specialty: "Winter Pet Care Specialist",
      experience: "8+ years",
      bio: "Expert in seasonal pet care and preventive medicine",
      availability: "Tue, Thu, Sat"
    },
    {
      id: 3,
      image: vet3,
      name: "Dr. Jennifer Smith",
      specialty: "Winter Grooming Specialist",
      experience: "10+ years",
      bio: "Dedicated to keeping pets comfortable in cold weather",
      availability: "Mon-Fri"
    }
  ];

  return (
    <section className="py-20">
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="inline-block bg-primary/10 px-6 py-2 rounded-full mb-4">
          <span className="text-primary font-semibold">🐾 Our Team</span>
        </div>
        <h1 className="font-bold font-primary text-4xl md:text-5xl lg:text-6xl mb-4">
          Meet Our Expert <span className="text-primary">Veterinarians</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Compassionate care from experienced professionals dedicated to your pet's well-being
        </p>
      </div>

      {/* Vets Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {vets.map((vet) => (
            <div 
              key={vet.id}
              className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              
              <div className="relative pt-8 px-8">
                <div className="relative mx-auto">
                  <div className="absolute inset-0 rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <Image
                    src={vet.image}
                    alt={vet.name}
                    width={200}
                    height={200}
                    className="relative rounded-full border-4 border-primary-content shadow-xl object-cover mx-auto group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              <div className="p-8 text-center">
                <div className="mb-4">
                  <h2 className="font-bold text-xl font-primary text-primary mb-2">
                    {vet.name}
                  </h2>
                  <div className="inline-flex items-center gap-1 bg-secondary px-3 py-1 rounded-full text-sm text-primary font-medium">
                    <span>⭐</span>
                    <span>{vet.experience} experience</span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="font-semibold text-gray-800 text-lg mb-1">
                    {vet.specialty}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {vet.bio}
                  </p>
                </div>
                <div className="mb-6">
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    <span>Available: {vet.availability}</span>
                  </div>
                </div>
                <div className="flex gap-3 justify-center">
                  <button className="btn btn-primary btn-sm text-primary-content rounded-full px-6 border-0 shadow-md hover:shadow-lg transition-all">
                    Book Visit
                  </button>
                  <button className="btn btn-outline btn-sm border-primary text-primary rounded-full px-6 hover:bg-primary hover:text-primary-content transition-all">
                    Profile
                  </button>
                </div>
              </div>

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-3xl transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className=" rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="font-bold text-2xl font-primary text-primary mb-4">
              Need Emergency Care?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our vets are available for urgent consultations. Don't hesitate to reach out for immediate assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn btn-primary text-primary-content px-8 rounded-full border-0 shadow-lg hover:shadow-xl transition-all">
                📞 Emergency Contact
              </button>
              <button className="btn btn-outline border-primary text-primary px-8 rounded-full hover:bg-primary hover:text-primary-content transition-all">
                📅 Schedule Online
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vets;