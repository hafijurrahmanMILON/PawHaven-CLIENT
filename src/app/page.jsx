
import Hero from "@/Components/Home/Hero";
import OurProducts from "@/Components/Home/OurProducts";
import ServicesOverview from "@/Components/Home/ServicesOverview";
import Statistic from "@/Components/Home/Statistic";
import Testimonials from "@/Components/Home/Testimonials";
import Vets from "@/Components/Home/Vets";
import WinterTips from "@/Components/Home/WinterTips";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <div className="w-9/12 mx-auto my-12">
        <OurProducts></OurProducts>
      </div>
      <div className="w-9/12 mx-auto my-12">
        <WinterTips></WinterTips>
      </div>
      <Statistic></Statistic>
      <div className="w-9/12 mx-auto my-12">
      <Vets></Vets>
      </div>
      <div className="w-9/12 mx-auto my-12">
      <ServicesOverview></ServicesOverview>
      </div>
      <div className="w-9/12 mx-auto my-12">
      <Testimonials></Testimonials>
      </div>
    </div>
  );
}
