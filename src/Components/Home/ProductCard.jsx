"use client";

import React from "react";
import Link from "next/link";
import { IoStar, IoArrowForwardCircleOutline } from "react-icons/io5";

const ProductCard = ({ service }) => {
  const { image, serviceName, rating, price, serviceId, category, description } = service;

  return (
    <div className="group relative w-full bg-base-100 rounded-[2rem] overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(203,153,126,0.15)] border border-primary/5 hover:border-primary/20 bg-gradient-to-b from-white to-secondary/10">
      
      {/* Image Container with Badge */}
      <figure className="relative h-64 w-full p-3">
        <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden shadow-inner">
          <img
            src={image}
            alt={serviceName}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Overlay Gradient on Image */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Category Badge - Top Left */}
          <span className="absolute top-4 left-4 px-4 py-1.5 bg-white/90 backdrop-blur-md text-primary text-xs font-bold rounded-full shadow-sm uppercase tracking-wider">
            {category}
          </span>
        </div>
      </figure>

      {/* Content Body */}
      <div className="p-6 pt-2">
        {/* Rating and Price Row */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1 bg-accent/20 px-2 py-1 rounded-lg">
            <IoStar className="text-orange-400 text-sm" />
            <span className="text-xs font-bold text-gray-700">{rating}</span>
          </div>
          <div className="flex items-baseline gap-0.5">
            <span className="text-sm font-semibold text-primary">$</span>
            <span className="text-2xl font-black text-primary tracking-tight">{price}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-base-content mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-1">
          {serviceName}
        </h3>

        {/* Description */}
        <p className="text-base-content/60 text-sm line-clamp-2 leading-relaxed mb-6 min-h-[40px]">
          {description}
        </p>

        {/* Action Button */}
        <div className="relative z-10">
          <Link
            href={`/products/${serviceId}`}
            className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-white rounded-2xl font-bold overflow-hidden relative group/btn transition-all duration-300 active:scale-95 shadow-lg shadow-primary/20 hover:shadow-primary/40"
          >
            <span className="relative z-10">View Details</span>
            <IoArrowForwardCircleOutline className="text-2xl relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1" />
            
            {/* Button Hover Shine Effect */}
            <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500 ease-in-out" />
          </Link>
        </div>
      </div>

      {/* Subtle Background Pattern (Optional) */}
      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
    </div>
  );
};

export default ProductCard;