import React from "react";
import Container from "./Container";

export default function Quote() {
  return (
    <section className="object-cover bg-cover bg-top" style={{ backgroundImage: `url("/img/quote-bg.jpg")` }}>
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
