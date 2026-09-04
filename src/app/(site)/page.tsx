import Hero from "@/components/hero/Hero";
import ProductGrid from "@/components/products/ProductGrid";
import AwardsSection from "@/components/sections/AwardsSection";
import DataSourcesSection from "@/components/sections/DataSourcesSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import MediaSection from "@/components/sections/MediaSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductGrid />
      <AwardsSection />
      <DataSourcesSection />
      <ExpertiseSection />
      <TestimonialsSection />
      <MediaSection />
    </>
  );
}
