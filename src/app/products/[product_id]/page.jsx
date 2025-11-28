"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ProductDetailsCard from "@/Components/ProductDetailsCard";

export default function ProductDetailsPage() {
  const { product_id } = useParams();
  console.log(product_id);

  const [product, setProduct] = useState({});
  console.log(product);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find(
          (item) => Number(item.serviceId) === Number(product_id)
        );
        setProduct(found);
        console.log(found);
      });
  }, [product_id]);

  return (
    <div className="min-h-screen flex items-center justify-center my-6">
      <ProductDetailsCard product={product}></ProductDetailsCard>
    </div>
  );
}
