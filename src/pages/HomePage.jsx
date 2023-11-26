import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Quote from "../components/Quote";
import Services from "../components/Services";
import About from "../components/About";
import PhotoGallery from "../components/PhotoGallery";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Quote />
      <Services />
      <About />
      <PhotoGallery />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
