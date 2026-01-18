"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ProductDetailsCard from "@/Components/ProductDetailsCard";

export default function ProductDetailsPage() {
  const { product_id } = useParams();
  console.log(product_id);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(
          `https://paw-haven-server-livid.vercel.app/services/${product_id}`,
        );

        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [product_id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center my-6">
      <ProductDetailsCard product={product}></ProductDetailsCard>
    </div>
  );
}
