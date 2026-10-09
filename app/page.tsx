import AllProducts from "./HomePage/AllProducts";
import HeroSectionPage from "./HomePage/HeroSection";
import PriceDecreased from "./HomePage/PriceDecreased";
import PriceIncreased from "./HomePage/PriceIncreased";


export default function Home() {
  return (
    <div>
      <HeroSectionPage />
      <PriceIncreased />
      <PriceDecreased />
      <AllProducts />

    </div>
  );
}
