import React from "react";
import Container from "./Container";

export default function Gallery() {
  return (
    <section className="py-24" id="gallery">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-none text-[#363636]">
            Galería
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-8 gap-4">
          <div className="md:col-span-6 md:row-span-4 md:col-start-1 md:row-start-2">
            <img src="/img/280595178_569166404590718_164566642631978337_n.jpg" alt="" className="object-cover" />
          </div>
          <div className="md:col-span-6 md:row-span-4 md:col-start-7 md:row-start-1">
            <img src="/img/344852031_126269637112257_101586932476997810_n.jpg" alt="" className="object-cover" />
          </div>
          <div className="md:col-span-4 md:row-span-3 md:col-start-3 md:row-start-6">
            <img src="/img/333077102_544289104435804_2072055950790997710_n.jpg" alt="" className="object-cover" />
          </div>
          <div className="md:col-span-5 md:row-span-4 md:col-start-7 md:row-start-5">
            <img src="/img/280268122_565362708227852_8394539402376855037_n.jpg" alt="" className="object-cover" />
          </div>
        </div>
      </Container>
    </section>
  );
}
