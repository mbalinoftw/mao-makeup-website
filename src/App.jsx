import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import PhotoGallery from "./components/PhotoGallery";
import Testimonials from "./components/Testimonials";
import Quote from "./components/Quote";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  // rosa #E5C5C6 #D1AAAB #D3898A negro #363636 #615C60

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <PhotoGallery />
      <Testimonials />
      <Quote />
      <Contact />
      <Footer />
    </>
  );
}
