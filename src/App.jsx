import React from "react";
import FloatCards from "./pages/FloatCards";
import ModernFinance from "./pages/ModernFinance";
import Faq from "./pages/Faq";
import Testimonial from "./pages/Testimonial";
import Pricelist from "./pages/Pricelist";
import BusinessTools from "./pages/BusinessTools";
import Three from "./pages/Three";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import LogoSlide from "./pages/LogoSlide";
import Infrastructure from "./pages/Infrastructure";
import FinanceDashboard from "./pages/FinanceDashboard";

import Products from "./pages/Products";
const App = () => {
  return (
    <div>
      <Hero />
      <LogoSlide />
      <FloatCards />
      <Three />
      <Products />
      <Infrastructure />
      <ModernFinance />
      <FinanceDashboard />
      <BusinessTools />
      <Faq />
      <Pricelist />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
