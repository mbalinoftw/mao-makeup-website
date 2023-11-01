import React from "react";
import Container from "./Container";
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <header className="pt-20">
      <Container>
        <div className="py-12 grid place-items-center grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8">
          <div className="py-6 lg:py-0 lg:col-span-5 text-center lg:text-left">
            <h2 className="font-mao text-xs md:text-normal tracking-[.2rem] md:tracking-[.4rem] uppercase">
              mariela ayelen ordoñez
            </h2>
            <h1 className="font-hero font-semibold text-[#363636] max-w-sm lg:max-w-full mb-4 text-5xl md:text-7xl lg:text-7xl xl:text-8xl tracking-tight">
              makeup & hairstyle
            </h1>
            <Link
              to="https://wa.me/5491123534749"
              target="_blank"
              rel="noreferrer"
              className="mt-4 px-6 lg:px-8 py-2 lg:py-3 inline-flex items-center justify-center gap-2 text-white bg-[#D1AAAB] rounded-full">
              <i className="fa-brands fa-whatsapp text-2xl lg:text-3xl"></i>
              <span className="text-sm lg:text-xl">Reservá tu fecha</span>
            </Link>
          </div>
          <div className="mt-4 grid grid-cols-6 lg:col-span-7 items-center gap-2">
            <div className="col-span-3 space-y-4">
              <img
                className="relative w-2/3 ml-auto rounded-md shadow-lg bg-white p-1 md:p-2 transform translate-y-1 z-20 -rotate-3"
                src="/img/hero-sm.png"
                alt="hero image"
              />
              <img
                className="relative rounded-md shadow-lg bg-white p-1 md:p-2 transform rotate-6 -translate-y-4 z-10"
                src="/img/hero-md.png"
                alt="hero image"
              />
            </div>
            <div className="col-span-3">
              <img
                className="rounded-md shadow-lg bg-white p-1 md:p-2 transform rotate-3"
                src="/img/hero-lg.jpeg"
                alt="hero image"
              />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
