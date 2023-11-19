import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import Container from "./Container";
import img1 from "/img/01.jpg";
import img2 from "/img/02.jpg";
import img3 from "/img/03.jpg";
import img4 from "/img/04.jpg";
import img5 from "/img/05.jpg";
import img6 from "/img/06.jpg";
import img7 from "/img/07.jpg";
import img8 from "/img/08.jpg";
import img9 from "/img/09.jpg";
import img10 from "/img/10.jpg";
import img11 from "/img/11.jpg";
import img12 from "/img/12.jpg";
import img13 from "/img/13.jpg";
import img14 from "/img/14.jpg";
import img15 from "/img/15.jpg";
import img16 from "/img/16.jpg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInItems } from "../utils/animationVariants";

export default function PhotoGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.75, once: true });

  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
  ];
  return (
    <section className="py-24" id="galeria">
      <Container>
        <div className="text-center mb-12">
          <h2 className="section-title">Galería</h2>
        </div>
        <Gallery>
          <div ref={ref} className="p-2 bg-white grid grid-cols-2 md:grid-cols-4 gap-2 ">
            {images.map((img, index) => (
              <Item key={img} original={img} thumbnail={img} width="1600" height="2000">
                {({ ref, open }) => (
                  <motion.div
                    className="overflow-hidden"
                    variants={fadeInItems}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={index}>
                    <img
                      ref={ref}
                      className="object-cover w-full h-full cursor-pointer hover:scale-110 duration-300"
                      onClick={open}
                      src={img}
                    />
                  </motion.div>
                )}
              </Item>
            ))}
          </div>
        </Gallery>
      </Container>
    </section>
  );
}
