import React from "react";
import Container from "./Container";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/animationVariants";
import img from "/img/about-me.jpg";

export default function About() {
  return (
    <section className="py-24" id="acerca-de-mi">
      <Container>
        <h2 className="section-title">Acerca de mí</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 md:gap-6">
          <div className="">
            <motion.img
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              src={img}
              alt="imagen de Ayelen"
              className="object-cover rounded-full"
            />
          </div>
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-4 col-span-2">
            <h3 className="text-lg md:text-xl font-bold">¡Hola! Mi nombre es Ayelen</h3>
            <p className="">
              Soy una apasionada <strong>maquilladora y peinadora profesional con más de 10 años</strong> de experiencia.
            </p>
            <p className="">
              Me formé junto a profesionales de renombre y sigo perfeccionando mis habilidades, manteniendo un profundo
              conocimiento de las últimas tendencias y técnicas.
            </p>
            <p className="">
              Participé en diversas <strong>producciones fotográficas, campañas audiovisuales y desfiles de moda</strong> que me
              permitieron desarrollarme profesionalmente y adaptarme a cualquier tipo de ocasión.
            </p>
            <p className="">
              No hay mayor satisfacción para mi que ver a una clienta sintiéndose hermosa y contenta con su look.{" "}
              <strong>Contactame para tu próximo evento</strong> y te garantizo una experiencia única.
            </p>
            <p className="">¡Te espero!</p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
