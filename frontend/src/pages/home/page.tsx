import React from "react";
import FeaturesSection from "./components/features";
import HeroSection from "./components/hero";

export default function HomePage() {
  return (
    <React.Fragment>
      <HeroSection />
      <FeaturesSection />
    </React.Fragment>
  );
}
