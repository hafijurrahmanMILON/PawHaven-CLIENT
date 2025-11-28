"use client";

import React from "react";
import Link from "next/link";

const ProductCard = ({ service }) => {
  const { image, serviceName, rating, price, serviceId, category,description } = service;

  return (
    <div className="card w-full bg-primary-content rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-primary/20">
      <figure className="h-60 p-4">
        <div className="w-full h-full rounded-xl overflow-hidden shadow-sm">
          <img
            src={image}
            alt={serviceName}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </figure>

      <div className="card-body p-4 flex flex-col justify-between">
        <div className="flex justify-between items-start mb-2">
          <span className="inline-block px-3 py-1 bg-secondary text-primary rounded-full text-sm font-medium capitalize">
            {category}
          </span>
        </div>

        <h3 className="card-title text-lg font-semibold text-primary mb-2 line-clamp-1">
          {serviceName}
        </h3>

        <div className="mb-3">
          <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="rating rating-sm">
              <input
                type="radio"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
            </div>
            <span className="text-sm font-medium text-gray-700">{rating}</span>
          </div>

          <div className="text-right">
            <span className="text-2xl font-bold text-primary">${price}</span>
          </div>
        </div>

        <div className="card-actions">
          <Link
                href={`/products/${serviceId}`}
            className="btn border-0 w-full rounded-xl font-semibold text-primary-content bg-primary hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
