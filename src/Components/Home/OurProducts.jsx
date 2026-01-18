"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/Components/Home/ProductCard";
import { IoSparklesOutline, IoArrowForwardOutline } from "react-icons/io5";
import Link from "next/link";

const OurProducts = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          "https://paw-haven-server-livid.vercel.app/services",
        );
        const data = await res.json();
        setAllProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-[3px] bg-primary rounded-full"></span>
            <span className="text-primary font-bold text-xs uppercase tracking-[0.25em] flex items-center gap-2">
              <IoSparklesOutline />
              Curated Collections
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-base-content leading-[1.1] tracking-tight">
            Premium <span className="text-primary italic">Services</span> <br />
            & Pet Essentials
          </h2>
          <p className="mt-6 text-base-content/60 text-lg leading-relaxed max-w-xl">
            Experience the gold standard in pet care. From expert grooming to
            veterinary excellence, we provide everything your pet needs to
            thrive.
          </p>
        </div>

        <div className="hidden md:block">
          <Link href='/products' className="group flex items-center gap-3 text-primary font-bold hover:gap-5 transition-all duration-300">
            View All Services
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
              <IoArrowForwardOutline size={20} />
            </div>
          </Link>
        </div>
      </div>

      {/* Grid Layout - No Loader */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
        {allProducts.map((service) => (
          <div key={service.serviceId} className="flex justify-center h-full">
            <ProductCard service={service} />
          </div>
        ))}
      </div>

      {/* Mobile CTA */}
      <div className="mt-16 text-center md:hidden">
        <button className="w-full bg-primary text-white py-5 rounded-2xl font-bold shadow-lg shadow-primary/20 flex items-center justify-center gap-3">
          View All Services <IoArrowForwardOutline />
        </button>
      </div>
    </section>
  );
};

export default OurProducts;
