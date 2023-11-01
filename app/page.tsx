import FeatureWithProduct from "@/components/feature-with-product";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Stats from "@/components/stats";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <FeatureWithProduct />
      <Stats />
      {/* <Prices /> */}
      {/* <Testimonials /> */}
    </main>
  );
}
