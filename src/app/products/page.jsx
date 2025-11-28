"use client";
import ProductCard from "@/Components/Home/ProductCard";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);

  return (
    <div className="space-y-6 w-9/12 mx-auto my-12">
      <div className="text-center space-y-4 mt-12">
        <h1 className="font-bold font-primary text-3xl md:text-5xl">
          <span className="font-primary text-primary">PawHaven&#39;s </span>{" "}
          Products and Services
        </h1>
        <p className="font-semibold text-gray-500 text-center">
          Discover our carefully curated seasonal services designed to keep your
          pets warm, happy, <br />
          and healthy throughout the winter months.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center my-6">
        <input
          type="text"
          placeholder="Search products..."
          className="input input-bordered w-full md:w-1/2 rounded-lg"
        />
        <select
          className="select select-bordered w-full md:w-1/4 rounded-lg "
          defaultValue="Filter by Category"
        >
          <option disabled>Filter by Category</option>
          <option>Clothing</option>
          <option>Grooming</option>
          <option>Nutrition</option>
          <option>Accessories</option>
          <option>Consultation</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {allProducts.map((service) => (
          <ProductCard key={service.serviceId} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Page;
