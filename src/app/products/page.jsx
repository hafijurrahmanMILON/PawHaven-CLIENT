import ProductCard from "@/Components/Home/ProductCard";

const Page = async() => {
 
  const res = await fetch('http://localhost:5000/services')
  const allProducts = await res.json()
  console.log(allProducts)

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {allProducts.map((service) => (
          <ProductCard key={service.serviceId} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Page;
