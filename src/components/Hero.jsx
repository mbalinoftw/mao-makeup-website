import React from "react";
import Container from "./Container";

export default function Hero() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center gap-12 md:gap-8">
          <div className="md:w-1/2">
            <h1 className="font-roboto text-[#363636] mb-4 text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-none ">
              El makeup y peinado perfecto para tus eventos sociales
            </h1>
            <div className="flex flex-col-reverse md:flex-row gap-2">
              <a
                href="https://wa.me/5491123534749"
                target="_blank"
                rel="noreferrer"
                className="px-4 lg:px-8 py-2 lg:py-3 inline-flex items-center justify-center gap-2 text-white bg-[#D1AAAB] rounded-md">
                <i className="fa-brands fa-whatsapp text-2xl lg:text-3xl"></i>
                <span className="text-lg lg:text-xl">Contactame</span>
              </a>
              <a
                href="#services"
                className="px-4 lg:px-8 py-2 lg:py-3 inline-flex items-center justify-center gap-2 border border-[#D1AAAB] bg-transparent text-[#D1AAAB] rounded-md">
                <i className="fa-solid fa-heart text-2xl lg:text-3xl"></i>
                <span className="text-lg lg:text-xl">Servicios</span>
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              className="md:w-[80%] ml-auto rounded-md shadow-xl transform md:rotate-3"
              src="/img/hero-img.jpeg"
              alt="hero image"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
