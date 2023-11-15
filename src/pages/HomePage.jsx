import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import PhotoGallery from '../components/PhotoGallery';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <PhotoGallery />
      <Testimonials />
      <Contact />
    </>
  );
}
