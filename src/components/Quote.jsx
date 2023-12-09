import React, { useEffect, useState } from "react";
import Container from "./Container";
import { useInView } from "react-intersection-observer";

export default function Quote() {
  const [imgSrc, setImgSrc] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setImgSrc('url("/img/quote-bg.webp")');
    }
  }, [inView]);

  return (
    <section ref={ref} className="object-cover bg-cover bg-top" style={{ backgroundImage: imgSrc }}>
      <Container>
        <div className="h-[50vh] flex items-center">
          <h3 className="font-mao md:w-1/2 ml-auto text-center md:text-right text-2xl md:text-4xl lg:text-5xl font-bold text-white select-none">
            "La belleza comienza en el momento en que decides ser tú misma."
          </h3>
        </div>
      </Container>
    </section>
  );
}
