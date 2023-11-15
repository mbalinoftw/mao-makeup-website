import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import Container from "./Container";
import img1 from "/img/novias/280258410_519806036453124_8987404031912992358_n.jpg";
import img2 from "/img/novias/337594843_611251530446459_8976285512594403059_n.jpg";
import img3 from "/img/sociales/IMG_9895.jpg";
import img4 from "/img/sociales/IMG_8883.jpg";
import img5 from "/img/peinados/280268122_565362708227852_8394539402376855037_n.jpg";
import img6 from "/img/quinces/IMG_6258.jpg";
import img7 from "/img/novias/344105879_218000837626158_7073430443344764616_n.jpg";
import img8 from "/img/sociales/337300913_123063347298644_4758809949386365593_n.jpg";
import img9 from "/img/sociales/IMG_9400.jpg";
import img10 from "/img/sociales/IMG_5290.jpg";
import img11 from "/img/peinados/384075880_241952375514887_1284231401497759189_n.jpg";
import img12 from "/img/sociales/333077102_544289104435804_2072055950790997710_n.jpg";
import img13 from "/img/sociales/335798980_773927307493742_9178982124340075214_n.jpg";
import img14 from "/img/quinces/278894169_410512507579008_8734443599812097411_n.jpg";
import img15 from "/img/quinces/2be2585d-c650-4885-b257-7ff2ed3fbae6.jpg";
import img16 from "/img/peinados/336273783_2268490603322973_6294992738511532225_n.jpg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function PhotoGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.15, once: true });

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
    <section className="py-20" id="galeria">
      <Container>
        <div className="text-center mb-12">
          <h2 className="section-title">Galería</h2>
        </div>
        <Gallery>
          <div ref={ref} className="p-2 bg-white grid grid-cols-2 md:grid-cols-4 gap-2 ">
            {images.map((img) => (
              <Item key={img} original={img} thumbnail={img} width="1600" height="2000">
                {({ ref, open }) => (
                  <motion.div
                    className="overflow-hidden"
                    style={{
                      transform: isInView ? "translateY(0)" : "translateY(-2rem)",
                      opacity: isInView ? 1 : 0,
                      transition: "all .5s",
                    }}>
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
