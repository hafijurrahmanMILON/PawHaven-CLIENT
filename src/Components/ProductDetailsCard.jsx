import React from "react";

const ProductDetailsCard = ({ product }) => {
  if (!product) {
    return (
      <div className="text-center text-red-500 font-semibold">Loading...</div>
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
    <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 p-8">
          <img
            src={image}
            alt={serviceName}
            className="w-full h-96 object-cover rounded-2xl"
          />
        </div>
        <div className="lg:w-1/2 p-8">
          <div className="space-y-4">
            <h1 className="text-3xl font-primary font-bold text-primary">
              {serviceName}
            </h1>
            <span className="inline-block px-3 py-1 bg-secondary text-amber-800 rounded-full text-sm font-medium">
              {category}
            </span>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                </div>
                <span className="font-semibold text-gray-700">{rating}</span>
              </div>
              <span className="text-3xl font-bold text-primary">${price}</span>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              {description}
            </p>

            <div className="bg-secondary rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">
                Service Provider
              </h3>
              <p className="text-gray-700">{providerName}</p>
              <p className="text-gray-600 text-sm">{providerEmail}</p>
            </div>

            <div className="text-gray-600">
              Slots Available:{" "}
              <strong className="text-primary">{slotsAvailable}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
