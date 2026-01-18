"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import hero from "../../assets/heroIMG.png";

const Hero = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden bg-secondary/60">
      <div className="absolute top-[-10%] right-[-5%] w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <motion.div 
            className="flex-1 text-center md:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-block px-4 py-1 rounded-full bg-accent/20 text-primary font-medium text-sm mb-4">
              🐾 Your pet&#39;s second home
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="font-bold text-4xl md:text-6xl lg:text-7xl text-base-content leading-tight"
            >
              The Best Care for <br />
              <span className="text-primary">Your Best Friend</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="mt-6 text-lg text-base-content/80 max-w-xl leading-relaxed"
            >
              At <span className="font-semibold text-primary">PawHaven</span>, we provide exceptional grooming, boarding, and walking services. Trust us to keep your furry friends happy, healthy, and loved.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="btn btn-primary btn-lg rounded-full px-8 shadow-lg hover:shadow-primary/30 transition-all">
                Explore Services
              </button>
              <button className="btn btn-outline border-accent text-accent-content hover:bg-accent hover:border-accent btn-lg rounded-full px-8">
                Book a Visit
              </button>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-10 flex items-center justify-center md:justify-start gap-6 border-t border-accent/30 pt-8">
              <div>
                <p className="text-2xl font-bold text-base-content">15k+</p>
                <p className="text-sm opacity-70">Happy Pets</p>
              </div>
              <div className="w-[1px] h-10 bg-accent/30"></div>
              <div>
                <p className="text-2xl font-bold text-base-content">4.9/5</p>
                <p className="text-sm opacity-70">Client Rating</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-accent/30 rounded-3xl rotate-3 scale-105 -z-10"></div>
            
            <motion.div
              
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src={hero}
                alt=""
                width={600}
                height={600}
                className="w-full object-cover transform hover:scale-105 transition-transform duration-500"
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