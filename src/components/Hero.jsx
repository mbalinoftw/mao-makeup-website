import React from "react";
import Container from "./Container";

export default function Hero() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center gap-12 md:gap-8">
          <div className="md:w-1/2">
            <h1 className="mb-4 text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-none text-[#363636]">
              El makeup perfecto para tus eventos sociales
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore vel aliquid possimus fuga quis nisi fugit
              hic exercitationem perspiciatis voluptas necessitatibus esse, et earum!
            </p>
            <div className="flex flex-col-reverse md:flex-row gap-2">
              <a
                href="#"
                className="px-4 lg:px-8 py-2 lg:py-3 inline-flex items-center justify-center gap-2 text-white bg-[#D1AAAB] rounded-md">
                <i className="fa-brands fa-whatsapp text-2xl lg:text-3xl"></i>
                <span className="text-lg lg:text-xl">Contactame</span>
              </a>
              <a
                href="#"
                className="px-4 lg:px-8 py-2 lg:py-3 inline-flex items-center justify-center gap-2 border border-[#D1AAAB] bg-transparent text-[#D1AAAB] rounded-md">
                <i className="fa-solid fa-heart text-2xl lg:text-3xl"></i>
                <span className="text-lg lg:text-xl">Ver más</span>
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              className="rounded-md shadow-xl transform md:rotate-3"
              src="/img/337323979_232625065802001_4733831277775500009_n.jpg"
              alt="hero image"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
