import { Scissors, Stethoscope, Bone, Home, HeartHandshake, PawPrint, ArrowRight } from "lucide-react";
import React from "react";

const services = [
  {
    id: 1,
    title: "Pet Grooming",
    description: "Professional grooming including bathing, trimming, and nail care to keep your pets clean.",
    icon: <Scissors className="w-7 h-7" />,
  },
  {
    id: 2,
    title: "Veterinary Consultation",
    description: "Experienced veterinarians providing routine checkups and health consultations.",
    icon: <Stethoscope className="w-7 h-7" />,
  },
  {
    id: 3,
    title: "Nutrition & Diet",
    description: "Personalized nutrition plans tailored to your pet’s age, breed, and health needs.",
    icon: <Bone className="w-7 h-7" />,
  },
  {
    id: 4,
    title: "Boarding & Daycare",
    description: "Safe, clean, and caring boarding facilities where your pets feel at home.",
    icon: <Home className="w-7 h-7" />,
  },
  {
    id: 5,
    title: "Training Support",
    description: "Gentle training programs to help pets develop positive habits and confidence.",
    icon: <PawPrint className="w-7 h-7" />,
  },
  {
    id: 6,
    title: "Compassionate Care",
    description: "Special care services for senior pets focused on comfort, love, and well-being.",
    icon: <HeartHandshake className="w-7 h-7" />,
  },
];

const ServicesOverview = () => {
  return (
    <section className=" py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/40 rounded-full blur-[100px] -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -ml-32 -mb-32"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="text-primary font-bold text-xs uppercase tracking-widest">Our Specialties</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-base-content leading-tight">
            Comprehensive Care <br /> 
            <span className="text-primary italic">For Every Pet</span>
          </h2>
          <p className="mt-6 text-base-content/60 text-lg">
            At PawHaven, we provide trusted and professional pet care services designed to support your pet’s health and happiness.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-[#FAF9F6] rounded-[2.5rem] p-10 transition-all duration-500 hover:shadow-[0_30px_60px_-20px_rgba(203,153,126,0.2)] border border-transparent hover:border-primary/10 relative overflow-hidden flex flex-col items-start"
            >
              <div className="relative w-16 h-16 flex items-center justify-center rounded-2xl bg-secondary transition-all duration-500 group-hover:bg-primary group-hover:text-white mb-8">
                <div className="text-primary group-hover:text-white transition-colors duration-500">
                  {service.icon}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-base-content mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-base-content/60 leading-relaxed mb-6">
                {service.description}
              </p>

              <button className="mt-auto flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider group/link">
                Learn More 
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
              </button>

              <div className="absolute -bottom-6 -right-6 text-primary opacity-[0.09] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none">
                <PawPrint className="w-32 h-32 rotate-12" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;