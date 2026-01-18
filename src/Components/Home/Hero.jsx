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
    <section className="relative w-full min-h-[75vh] flex items-center overflow-hidden bg-secondary/60">
      <div className="absolute top-[-10%] right-[-5%] w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-[-10%] left-[-5%] w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-10 py-10 md:py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-16">
          
          {/* Left Side - width slightly reduced */}
          <motion.div 
            className="flex-1 md:max-w-[50%] text-center md:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-block px-3 py-1 rounded-full bg-accent/20 text-primary font-medium text-xs mb-4">
              🐾 Your pet&#39;s second home
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="font-bold text-3xl md:text-5xl lg:text-6xl text-base-content leading-tight"
            >
              The Best Care for <br />
              <span className="text-primary">Your Best Friend</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="mt-4 text-base text-base-content/80 max-w-lg leading-relaxed mx-auto md:mx-0"
            >
              At <span className="font-semibold text-primary">PawHaven</span>, we provide exceptional grooming, boarding, and walking services. Trust us to keep your furry friends happy and loved.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <button className="btn btn-primary btn-md rounded-full px-6 shadow-lg hover:shadow-primary/30 transition-all">
                Explore Services
              </button>
              <button className="btn btn-outline border-accent text-accent-content hover:bg-accent hover:border-accent btn-md rounded-full px-6">
                Book a Visit
              </button>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8 flex items-center justify-center md:justify-start gap-6 border-t border-accent/30 pt-6">
              <div>
                <p className="text-xl font-bold text-base-content">15k+</p>
                <p className="text-xs opacity-70">Happy Pets</p>
              </div>
              <div className="w-[1px] h-8 bg-accent/30"></div>
              <div>
                <p className="text-xl font-bold text-base-content">4.9/5</p>
                <p className="text-xs opacity-70">Client Rating</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Image size slightly reduced */}
          <motion.div 
            className="flex-1 max-w-[380px] lg:max-w-[450px] relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-accent/30 rounded-3xl rotate-3 scale-105 -z-10"></div>
            
            <motion.div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={hero}
                alt="PawHaven Hero"
                width={500}
                height={500}
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
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