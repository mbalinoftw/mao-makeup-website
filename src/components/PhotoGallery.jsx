import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import Container from "./Container";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function PhotoGallery() {
  const ref = useRef(null);

  const images = [
    {
      src: "/img/01.webp",
      srcset: "/img/01-sm.webp 298w, /img/01-md.webp 596w, /img/01.webp 720w",
      sizes: "(min-width: 1360px) 298px, (min-width: 780px) 22.32vw, calc(50vw - 28px)",
    },
    {
      src: "/img/02.webp",
      srcset: "/img/02-sm.webp 298w, /img/02-md.webp 596w, /img/02.webp 720w",
      sizes: "(min-width: 1360px) 298px, (min-width: 780px) 22.32vw, calc(50vw - 28px)",
    },
    {
      src: "/img/03.webp",
      srcset: "/img/03-sm.webp 298w, /img/03-md.webp 596w, /img/03.webp 1280w",
      sizes: "(min-width: 1360px) 298px, (min-width: 780px) 22.32vw, calc(50vw - 28px)",
    },
    {
      src: "/img/04.webp",
      srcset: "/img/04-sm.webp 298w, /img/04-md.webp 596w, /img/04.webp 1280w",
      sizes: "(min-width: 1360px) 298px, (min-width: 780px) 22.32vw, calc(50vw - 28px)",
    },
    {
      src: "/img/05.webp",
      srcset: "/img/05-sm.webp 298w, /img/05-md.webp 658w, /img/05.webp 1280w",
      sizes: "(min-width: 1360px) 298px, (min-width: 780px) 22.32vw, calc(50vw - 28px)",
    },
    {
      src: "/img/06.webp",
      srcset: "/img/06-sm.webp 298w, /img/06-md.webp 654w, /img/06.webp 1280w",
      sizes: "(min-width: 1360px) 298px, (min-width: 780px) 22.32vw, calc(50vw - 28px)",
    },
    {
      src: "/img/07.webp",
      srcset: "",
      sizes: "",
    },
    {
      src: "/img/08.webp",
      srcset: "/img/08-sm.webp 298w, /img/08-md.webp 596w, /img/08.webp 1280w",
      sizes: "(min-width: 1360px) 298px, (min-width: 780px) 22.32vw, calc(50vw - 28px)",
    },
    {
      src: "/img/09.webp",
      srcset: "/img/09-sm.webp 298w, /img/09-md.webp 596w, /img/09.webp 1280w",
      sizes: "(min-width: 1360px) 298px, (min-width: 780px) 22.32vw, calc(50vw - 28px)",
    },
    {
      src: "/img/10.webp",
      srcset: "/img/10-sm.webp 298w, /img/10-md.webp 596w, /img/10.webp 1280w",
      sizes: "(min-width: 1360px) 298px, (min-width: 780px) 22.32vw, calc(50vw - 28px)",
    },
    {
      src: "/img/11.webp",
      srcset: "/img/11-sm.webp 298w, /img/11-md.webp 596w, /img/11.webp 720w",
      sizes: "(min-width: 1360px) 298px, (min-width: 780px) 22.32vw, calc(50vw - 28px)",
    },
    {
      src: "/img/12.webp",
      srcset: "/img/12-sm.webp 298w, /img/12-md.webp 596w, /img/12.webp 720w",
      sizes: "(min-width: 1360px) 298px, (min-width: 780px) 22.32vw, calc(50vw - 28px)",
    },
    {
      src: "/img/13.webp",
      srcset: "/img/13-sm.webp 298w, /img/13-md.webp 596w, /img/13.webp 720w",
      sizes: "(min-width: 1360px) 298px, (min-width: 780px) 22.32vw, calc(50vw - 28px)",
    },
    {
      src: "/img/14.webp",
      srcset: "/img/14-sm.webp 298w, /img/14-md.webp 596w, /img/14.webp 1080w",
      sizes: "(min-width: 1360px) 298px, (min-width: 780px) 22.32vw, calc(50vw - 28px)",
    },
    {
      src: "/img/15.webp",
      srcset: "/img/15-sm.webp 298w, /img/15-md.webp 596w, /img/15.webp 1280w",
      sizes: "(min-width: 1360px) 298px, (min-width: 780px) 22.32vw, calc(50vw - 28px)",
    },
    {
      src: "/img/16.webp",
      srcset: "/img/16-sm.webp 298w, /img/16-md.webp 596w, /img/16.webp 1080w",
      sizes: "(min-width: 1360px) 298px, (min-width: 780px) 22.32vw, calc(50vw - 28px)",
    },
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
              <Item key={img.src} original={img.src} thumbnail={img.src} width="1600" height="2000">
                {({ ref, open }) => (
                  <motion.div
                    initial={{ translateY: "2rem", opacity: 0 }}
                    whileInView={{ translateY: 0, opacity: 1, transition: { delay: index * 0.03 } }}
                    viewport={{ once: true }}
                    className="overflow-hidden">
                    <img
                      ref={ref}
                      className="object-cover w-full h-full cursor-pointer hover:scale-110 transition-transform duration-300"
                      onClick={open}
                      src={img.src}
                      srcSet={img.srcset}
                      sizes={img.sizes}
                      alt="foto de galería"
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
