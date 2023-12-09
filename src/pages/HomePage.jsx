import { lazy } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Quote from "../components/Quote";

const Services = lazy(() => import("../components/Services"));
const About = lazy(() => import("../components/About"));
const PhotoGallery = lazy(() => import("../components/PhotoGallery"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const Contact = lazy(() => import("../components/Contact"));
const Footer = lazy(() => import("../components/Footer"));

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
