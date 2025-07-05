import BestCategorySection from "@/components/BestCategorySection";
import CategoryGrid from "@/components/CategoryGrid";
import Countries from "@/components/countries";
import Discover from "@/components/discover";
import GrowthSection from "@/components/growthSection";
import Banner from "@/components/layout/banner";
import Footer from "@/components/layout/footer";
import Testimonial from "@/components/testimonial";
import ThreeStepSection from "@/components/threeStepSection";
import TrendingSlider from "@/components/trendingSlider";
import Usps from "@/components/usps";
import Why from "@/components/why";
import Image from "next/image";

export default function Home() {
  return (
<>
   <Banner bgImage={"url('/assets/bg.jpg')"}/>
   <Usps />
   <Why/>
   <CategoryGrid />
   <ThreeStepSection />
   {/* <TrendingSlider /> */}
   <Discover />
   <BestCategorySection />
   <GrowthSection />
   <Countries />
   {/* <Testimonial /> */}
   <Footer />
</>
  );  
}
