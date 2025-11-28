"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const OurProducts = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);

  return (
    <div className="space-y-4">
      <div className="text-center space-y-4 mt-12">
        <h1 className="font-bold font-primary text-3xl md:text-5xl">
          <span className="font-primary text-primary">PawHaven&#39;s </span>{" "}
          Products and Services
        </h1>
        <p className="font-semibold text-gray-500">
          Explore our most-loved seasonal services for cozy, happy pets.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {allProducts.map((service) => (
          <ProductCard key={service.serviceId} service={service} />
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
