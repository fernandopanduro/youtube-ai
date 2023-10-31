import FeatureWithProduct from "@/components/feature-with-product";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Prices from "@/components/prices";
import Stats from "@/components/stats";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Stats />
      <FeatureWithProduct />
      <Prices />
      <Testimonials />
    </main>
  );
}
