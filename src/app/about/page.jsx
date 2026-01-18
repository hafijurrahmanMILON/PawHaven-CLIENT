"use client";

import React from "react";
import Image from "next/image";
import { 
  IoHeartOutline, 
  IoStarOutline, 
  IoShieldCheckmarkOutline, 
  IoPawOutline,
  IoStorefrontOutline,
  IoChevronForwardOutline
} from "react-icons/io5";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-primary/5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6 border border-primary/10">
              <IoPawOutline className="text-primary" />
              <span className="text-primary font-bold text-xs uppercase tracking-widest">Our Journey</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-base-content mb-8 tracking-tight">
              About <span className="text-primary italic">PawHaven</span>
            </h1>
            <p className="text-xl text-base-content/60 max-w-2xl mx-auto leading-relaxed">
              We are more than just a pet store. We are a community of animal lovers 
              dedicated to enhancing the lives of our furry companions through 
              unmatched care and passion.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section with Overlap Design */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/20 rounded-[3rem] blur-2xl group-hover:bg-primary/30 transition-all duration-700"></div>
              <div className="relative bg-white p-4 rounded-[3rem] shadow-xl overflow-hidden">
                <Image
                  src="/aboutUsIMG.png"
                  alt="About PawHaven Story"
                  width={600}
                  height={500}
                  className="rounded-[2.5rem] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-2xl hidden md:block border border-primary/5 animate-bounce-slow">
                <p className="text-primary text-4xl font-black italic leading-none">10+</p>
                <p className="text-base-content/50 font-bold text-xs uppercase tracking-widest mt-2">Years of Love</p>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl font-black text-base-content leading-tight">
                Our Story Began with a <br />
                <span className="text-primary">Simple Mission</span>
              </h2>
              <p className="text-base-content/60 text-lg leading-relaxed">
                Founded with a deep passion for animal welfare, PawHaven began as a
                small neighborhood shop. Our founder noticed that pet parents needed 
                something more than just food; they needed a trusted sanctuary.
              </p>
              <p className="text-base-content/60 text-lg leading-relaxed">
                What started as a modest storefront has evolved into a comprehensive
                pet care center. Today, we're proud to provide premium grooming, 
                expert veterinary advice, and the finest organic supplies.
              </p>
              <div className="pt-4 border-t border-primary/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg">
                    <IoStorefrontOutline size={24} />
                  </div>
                  <p className="font-bold text-base-content italic text-lg tracking-tight">
                    From a local shop to your favorite haven.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-base-content">Our Core <span className="text-primary italic">Values</span></h2>
            <div className="w-24 h-1.5 bg-primary/20 mx-auto mt-4 rounded-full overflow-hidden">
              <div className="w-1/2 h-full bg-primary animate-slide"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Value 1 */}
            <div className="group bg-[#FAF9F6] p-10 rounded-[2.5rem] border border-transparent hover:border-primary/20 hover:bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <IoHeartOutline size={32} className="text-primary group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-base-content">Compassionate Care</h3>
              <p className="text-base-content/60 leading-relaxed">
                Every pet is treated as our own family member, with the love and respect 
                they deserve. Happiness is our top priority.
              </p>
            </div>

            {/* Value 2 */}
            <div className="group bg-[#FAF9F6] p-10 rounded-[2.5rem] border border-transparent hover:border-primary/20 hover:bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <IoStarOutline size={32} className="text-primary group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-base-content">Expert Quality</h3>
              <p className="text-base-content/60 leading-relaxed">
                Professional services and premium products backed by years of experience. 
                We never compromise on safety or standards.
              </p>
            </div>

            {/* Value 3 */}
            <div className="group bg-[#FAF9F6] p-10 rounded-[2.5rem] border border-transparent hover:border-primary/20 hover:bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <IoShieldCheckmarkOutline size={32} className="text-primary group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-base-content">Trust & Reliability</h3>
              <p className="text-base-content/60 leading-relaxed">
                Building lasting relationships with pet parents through consistent, 
                dependable, and transparent service every single day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Stats Bar */}
      <section className="py-20 bg-primary overflow-hidden relative">
        {/* Paw Prints Decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <IoPawOutline className="absolute top-10 left-10 text-white text-6xl rotate-12" />
           <IoPawOutline className="absolute bottom-10 right-20 text-white text-4xl -rotate-12" />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center items-center">
            <div className="space-y-2">
              <div className="text-5xl font-black text-white italic">5K+</div>
              <div className="text-white/70 font-bold text-xs uppercase tracking-widest">Happy Pets Served</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-black text-white italic">10+</div>
              <div className="text-white/70 font-bold text-xs uppercase tracking-widest">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-black text-white italic">50+</div>
              <div className="text-white/70 font-bold text-xs uppercase tracking-widest">Premium Products</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-black text-white italic">24/7</div>
              <div className="text-white/70 font-bold text-xs uppercase tracking-widest">Expert Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-white p-12 md:p-20 rounded-[4rem] shadow-2xl text-center border border-primary/5 relative overflow-hidden">
          {/* Abstract Circle Background */}
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-base-content mb-6 leading-tight">
              Ready to Give Your Pet the <br /> 
              <span className="text-primary italic">Best Care?</span>
            </h2>
            <p className="text-base-content/50 text-xl mb-10 max-w-2xl mx-auto">
              Visit PawHaven today and experience the difference that 
              true love and professional expertise can make.
            </p>
            <button className="bg-primary text-white px-12 py-5 rounded-2xl text-lg font-black shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all active:scale-95 group flex items-center gap-3 mx-auto">
              Visit Our Store
              <IoChevronForwardOutline  className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;