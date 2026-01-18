"use client";

import React from "react";
import { IoStar, IoChatbubbleSharp } from "react-icons/io5";

const testimonials = [
  {
    id: 1,
    name: "Alex Rivera",
    role: "Golden Retriever Owner",
    image: "https://i.pravatar.cc/150?u=alex",
    review: "PawHaven is a lifesaver! Their winter grooming service kept my Buddy's coat so soft and healthy even in the harshest cold. Highly recommended!",
    rating: 5
  },
  {
    id: 2,
    name: "Samantha Wick",
    role: "Cat Mom",
    image: "https://i.pravatar.cc/150?u=samantha",
    review: "The veterinary consultation was so thorough. Dr. Sarah was patient and answered all my questions about my kitten's nutrition plan.",
    rating: 5
  },
  {
    id: 3,
    name: "David Miller",
    role: "Foster Volunteer",
    image: "https://i.pravatar.cc/150?u=david",
    review: "Truly compassionate care. You can tell they actually love the animals. The boarding facility is clean and feels just like a second home.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Icon */}
      <div className="absolute top-10 left-10 text-primary/5 -rotate-12 pointer-events-none">
        <IoChatbubbleSharp size={200} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-1.5 rounded-full mb-4">
            <span className="text-primary font-bold text-xs uppercase tracking-[0.2em]">Wall of Love</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-base-content leading-tight">
            What Our <span className="text-primary italic">Clients</span> Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div 
              key={item.id} 
              className="group relative bg-secondary/20 p-8 md:p-10 rounded-[3rem] transition-all duration-500 hover:bg-white hover:shadow-[0_30px_60px_-15px_rgba(203,153,126,0.2)] border border-transparent hover:border-primary/10"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <IoStar key={i} className="text-orange-400 text-lg" />
                ))}
              </div>

              <p className="text-base-content/80 text-lg leading-relaxed mb-8 italic">
                {item.review}
              </p>

              <div className="flex items-center gap-4 border-t border-primary/10 pt-6">
                <div className="relative">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary shadow-md transition-transform duration-500 group-hover:scale-110">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-primary text-white p-1 rounded-full text-[10px]">
                    🐾
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-base-content text-lg group-hover:text-primary transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-sm text-base-content/50 font-medium">
                    {item.role}
                  </p>
                </div>
              </div>
              
              <span className="absolute top-8 right-10 text-6xl font-serif text-primary/40 group-hover:text-primary/20 transition-colors">
                “
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Stat (Optional) */}
        <div className="mt-16 text-center">
          <p className="text-base-content/60 font-medium">
            Join <span className="text-primary font-bold">2,000+</span> happy pet parents worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;