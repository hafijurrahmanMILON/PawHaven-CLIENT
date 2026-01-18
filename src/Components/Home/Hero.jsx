"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import hero from "../../assets/heroIMG.png";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden bg-secondary/60 pt-4 md:pt-0">
      {/* Background Orbs */}
      <div className="absolute top-[-5%] right-[-5%] w-48 h-48 md:w-64 md:h-64 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-[-5%] left-[-5%] w-60 h-60 md:w-80 md:h-80 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-10 py-8 md:py-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-16">
          
          {/* Left Side - Content */}
          <motion.div 
            className="w-full md:max-w-[55%] lg:max-w-[50%] text-center md:text-left order-2 md:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-block px-3 py-1 rounded-full bg-accent/20 text-primary font-bold text-[10px] md:text-xs mb-4 uppercase tracking-wider">
              🐾 Your pet&#39;s second home
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-base-content leading-[1.15] tracking-tight"
            >
              The Best Care for <br />
              <span className="text-primary italic">Your Best Friend</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="mt-4 text-sm md:text-base text-base-content/70 max-w-lg leading-relaxed mx-auto md:mx-0 font-medium"
            >
              At <span className="font-bold text-primary">PawHaven</span>, we provide exceptional grooming, boarding, and walking services. Trust us to keep your furry friends happy and loved.
            </motion.p>

            {/* Buttons - Mobile Responsive Gap */}
            <motion.div variants={itemVariants} className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <button className="btn btn-primary btn-md md:btn-lg rounded-2xl px-8 shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all font-bold">
                Explore Services
              </button>
              <button className="btn btn-outline border-primary/20 hover:bg-primary/5 btn-md md:btn-lg rounded-2xl px-8 font-bold">
                Book a Visit
              </button>
            </motion.div>

            {/* Micro Stats */}
            <motion.div variants={itemVariants} className="mt-10 flex items-center justify-center md:justify-start gap-8 border-t border-primary/10 pt-8">
              <div className="text-center md:text-left">
                <p className="text-xl md:text-2xl font-black text-base-content leading-none">15k+</p>
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-50 mt-1">Happy Pets</p>
              </div>
              <div className="w-[1px] h-10 bg-primary/10"></div>
              <div className="text-center md:text-left">
                <p className="text-xl md:text-2xl font-black text-base-content leading-none">4.9/5</p>
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-50 mt-1">Ratings</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div 
            className="w-[85%] sm:w-[70%] md:flex-1 max-w-[320px] sm:max-w-[380px] lg:max-w-[440px] relative order-1 md:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Background Decorative Box */}
            <div className="absolute inset-0 bg-primary/10 rounded-[2.5rem] md:rounded-[3rem] rotate-3 scale-105 -z-10"></div>
            
            <motion.div className="relative rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-4 border-white/50">
              <Image
                src={hero}
                alt="PawHaven Hero"
                width={500}
                height={500}
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                priority
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;