"use client";

import React from "react";
import { IoStar, IoMailOutline, IoPersonOutline, IoCalendarOutline, IoBagAddOutline } from "react-icons/io5";

const ProductDetailsCard = ({ product }) => {
  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <span className="loading loading-dots loading-lg text-primary"></span>
      </div>
    );
  }

  const {
    serviceName,
    providerName,
    providerEmail,
    price,
    rating,
    slotsAvailable,
    description,
    image,
    category,
  } = product;

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-[3rem] shadow-[0_30px_100px_rgba(203,153,126,0.12)] overflow-hidden border border-primary/5">
      <div className="flex flex-col lg:flex-row">
        
        <div className="lg:w-1/2 p-6 md:p-10">
          <div className="relative h-[400px] lg:h-full w-full rounded-[2.5rem] overflow-hidden group">
            <img
              src={image}
              alt={serviceName}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
            
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-6 py-2 rounded-2xl shadow-xl">
              <span className="text-2xl font-black text-primary">${price}</span>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div className="space-y-6">
            
            <div className="flex items-center justify-between">
              <span className="px-5 py-1.5 bg-secondary text-primary rounded-full text-xs font-bold uppercase tracking-widest border border-primary/10">
                {category}
              </span>
              <div className="flex items-center gap-2 bg-accent/10 px-3 py-1 rounded-lg">
                <IoStar className="text-orange-400" />
                <span className="font-bold text-gray-700">{rating}</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-base-content leading-tight">
              {serviceName}
            </h1>

            <p className="text-base-content/70 text-lg leading-relaxed border-l-4 border-primary/20 pl-6 italic">
              {description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6">
              <div className="bg-secondary/30 p-5 rounded-3xl border border-primary/5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-xl text-primary">
                    <IoPersonOutline size={20} />
                  </div>
                  <span className="text-[10px] font-bold uppercase opacity-50 tracking-tighter">Provider</span>
                </div>
                <p className="font-bold text-base-content truncate">{providerName}</p>
                <div className="flex items-center gap-1 mt-1 opacity-60">
                  <IoMailOutline size={12} />
                  <span className="text-xs truncate">{providerEmail}</span>
                </div>
              </div>

              <div className="bg-secondary/30 p-5 rounded-3xl border border-primary/5 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-xl text-primary">
                    <IoCalendarOutline size={20} />
                  </div>
                  <span className="text-[10px] font-bold uppercase opacity-50 tracking-tighter">Availability</span>
                </div>
                <p className="text-lg font-black text-primary">{slotsAvailable} Slots Left</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="flex-1 bg-primary text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all active:scale-95">
                <IoBagAddOutline size={24} />
                Book This Service
              </button>
              <button className="px-8 py-5 border-2 border-primary/20 text-primary rounded-2xl font-bold hover:bg-primary/5 transition-all active:scale-95">
                Inquiry
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;