import React from "react";
import Container from "./Container";
import { GiDiamondRing, GiTiara, GiPhotoCamera, GiGraduateCap } from "react-icons/gi";
import { BsStars } from "react-icons/bs";
import { FaGlassCheers } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <GiDiamondRing />,
      title: "novias",
      description:
        "¿Querés lucir radiante en el día más especial de tu vida? Te garantizo un maquillaje y peinado perfectos que harán resaltar tu belleza única.",
    },
    {
      icon: <GiTiara />,
      title: "15 años",
      description:
        "Merecés una noche inolvidable. Celebrá tu fiesta de quince con un peinado y maquillaje que hará que brilles como nunca.",
    },
    {
      icon: <FaGlassCheers />,
      title: "Eventos sociales",
      description:
        "Fiestas de Egresados, cumpleaños, salidas. Que tu belleza sea el centro de atención en cualquier ocasión. ",
    },
    {
      icon: <BsStars />,
      title: "Asesoría de imagen",
      description:
        "Ya sea que prefieras un estilo sencillo o sofisticado y elegante, te ayudo a elegir el look que mejor se adapte a vos.",
    },
    {
      icon: <GiPhotoCamera />,
      title: "sesión de fotos",
      description:
        "Te aseguramos que luzcas impecable frente a la cámara. Captura tu belleza y sentite una modelo profesional.",
    },
    {
      icon: <GiGraduateCap />,
      title: "clases de automaquillaje",
      description:
        "¿Querés aprender a maquillarte como una experta? Te enseño todos los secretos y técnicas necesarias para realzar tu belleza todos los días.",
    },
  ];

  return (
    <section className="py-16" id="services">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-none text-[#363636]">
            Servicios
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {services.map((s, index) => (
            <article
              key={index}
              className="p-6 flex flex-col items-center md:items-start rounded-lg hover:bg-[#E5C5C6]/25 text-center md:text-left transition-color duration-300 cursor-pointer">
              <div className="mb-4 grid place-items-center w-12 h-12 bg-[#D1AAAB] text-white text-xl rounded-full">
                {s.icon}
              </div>
              <h3 className="mb-2 text-xl md:text-2xl font-extrabold tracking-tight leading-none text-[#363636] capitalize">
                {s.title}
              </h3>
              <p className="leading-relaxed text-[#615C60]">{s.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
