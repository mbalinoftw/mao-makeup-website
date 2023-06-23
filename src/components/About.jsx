import React from "react";
import Container from "./Container";

export default function About() {
  return (
    <section className="py-16" id="about">
      <Container>
        <div className="text-center mb-12">
          <h2 className="font-roboto text-[#363636] text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-none ">
            Quién soy
          </h2>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-12 md:gap-8">
          <div className="md:w-1/2">
            <img src="/img/aye-1.jpg" alt="" className="object-cover w-2/3 mx-auto rounded-full" />
          </div>
          <div className="md:w-1/2">
            <div className="p-6">
              ¡Hola!, soy Ayelen. 
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
