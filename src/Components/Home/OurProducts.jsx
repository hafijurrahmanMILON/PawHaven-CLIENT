"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/Components/Home/ProductCard";

const OurProducts = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(
        "https://paw-haven-server-livid.vercel.app/services"
      );
      const data = await res.json();
      setAllProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="space-y-6 my-12">
      ...
      <div className="grid ...">
        {allProducts.map(service => (
          <ProductCard key={service.serviceId} service={service} />
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
