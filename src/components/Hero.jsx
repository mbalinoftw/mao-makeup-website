import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <header className="pt-20 select-none">
      <Container>
        <div className="grid place-items-center grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
          <div className="relative md:order-2 mt-4 md:col-span-7 grid grid-cols-6 items-center gap-2">
            <div className="col-span-3 space-y-2">
              <img
                className="relative w-2/3 ml-auto rounded-md shadow-lg bg-white p-1 md:p-2"
                src="/img/peinados/312340152_816635736119954_8133259678295405430_n.jpg"
                alt="hero image"
              />
              <img
                className="relative rounded-md shadow-lg bg-white p-1 md:p-2 z-10"
                src="/img/sociales/312487740_1731312690558283_8213814717519829527_n.jpg"
                alt="hero image"
              />
            </div>
            <div className="col-span-3">
              <img className="rounded-md shadow-lg bg-white p-1 md:p-2" src="/img/hero-lg.jpeg" alt="hero image" />
            </div>
          </div>
          <div className="py-6 md:py-0 md:col-span-5 text-center md:text-left">
            <h2 className="font-mao text-xs md:text-normal lg:text-lg tracking-[.2rem] lg:tracking-[.4rem] uppercase">
              mariela ayelen ordoñez
            </h2>
            <h1 className="font-hero font-semibold text-[#363636] max-w-sm lg:max-w-full mb-4 text-5xl md:text-[3.7rem] lg:text-7xl xl:text-8xl tracking-tight">
              makeup & hairstyle
            </h1>
            <Link
              to="https://wa.me/+5491123534748?text=_¡Hola, gracias por contactarme!_"
              target="_blank"
              rel="noreferrer"
              className="mt-4 px-6 lg:px-8 py-2 lg:py-3 inline-flex items-center justify-center gap-2 text-white bg-[#D1AAAB] rounded-full">
              <i className="fa-brands fa-whatsapp text-2xl lg:text-3xl"></i>
              <span className="text-sm lg:text-xl">Reservá tu fecha</span>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
