import React from "react";
import Container from "./Container";

export default function About() {
  return (
    <section className="py-20" id="acerca-de-mi">
      <Container>
        <h2 className="section-title">Acerca de mí</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 md:gap-6">
          <div className="">
            <img src="/img/aye-1.jpg" alt="" className="object-cover rounded-full" />
          </div>
          <div className="p-4 col-span-2">
            <h3 className="text-lg md:text-xl font-bold">¡Hola! Mi nombre es Ayelen</h3>
            <p className="">
              Soy una apasionada <strong>maquilladora y peinadora profesional con más de 10 años</strong> en la
              industria.
            </p>
            <p className="">
              Me formé junto a profesionales de renombre y sigo perfeccionando mis habilidades, manteniendo un profundo
              conocimiento de las últimas tendencias y técnicas.
            </p>
            <p className="">
              Participé en diversas <strong>producciones fotográficas y campañas audiovisuales</strong> que me
              permitieron desarrollarme profesionalmente y adaptarme a cualquier tipo de ocasión.
            </p>
            <p className="">
              No hay mayor satisfacción para mi que ver a una clienta sintiéndose hermosa y contenta con su look.{" "}
              <strong>Contactame para tu próximo evento</strong> y te garantizo una experiencia única.
            </p>
            <p className="">¡Te espero!</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
