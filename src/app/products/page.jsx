import ProductCard from "@/Components/Home/ProductCard";
import { IoSparklesOutline, IoFilterOutline } from "react-icons/io5";

const Page = async () => {
  const res = await fetch("https://paw-haven-server-livid.vercel.app/services");
  const allProducts = await res.json();

  return (
    <div className="min-h-screen pb-24">
      <section className=" py-20 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-1.5 rounded-full mb-2">
            <IoSparklesOutline className="text-primary animate-pulse" />
            <span className="text-primary font-bold text-xs uppercase tracking-widest">
              Our Professional Care
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-base-content tracking-tight">
            <span className="text-primary italic">PawHaven's</span> Products{" "}
            <br className="hidden md:block" />
            and Services
          </h1>

          <p className="max-w-2xl mx-auto text-base-content/60 text-lg leading-relaxed font-medium">
            Discover our carefully curated seasonal services designed to keep
            your pets warm, happy, and healthy throughout the year.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
          {allProducts.map((service) => (
            <div key={service.serviceId} className="flex justify-center h-full">
              <ProductCard service={service} />
            </div>
          ))}
        </div>

        {allProducts.length === 0 && (
          <div className="text-center py-20  rounded-[3rem] border border-dashed border-primary/20">
            <p className="text-xl font-bold opacity-40 italic">
              No products found at the moment.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
