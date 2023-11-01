import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import { useParams } from "react-router-dom";

export default function ServicePage() {
  const params = useParams();

  const [service, setService] = useState({});
  const services = {
    "novias": {
      title: "Novias",
      heroImg: "/img/aye-1.jpg",
      text: "lol",
      bullets: ["razon1", "razon2", "etcetc"],
    },
    "quince-anos": {
      title: "Quince años",
      heroImg: "/img/aye-1.jpg",
      text: "lol the revenge of llolololo",
      bullets: ["reason1", "reason2", "reason3"],
    },
    sociales: {
      title: "Sociales",
      heroImg: "/img/aye-1.jpg",
      text: "lol the revenge of llolololo",
      bullets: ["reason1", "reason2", "reason3"],
    },
    "glitter-bar": {
      title: "Glitter bar",
      heroImg: "/img/aye-1.jpg",
      text: "lol the revenge of llolololo",
      bullets: ["reason1", "reason2", "reason3"],
    },
    "sesion-de-fotos": {
      title: "Sesión de fotos",
      heroImg: "/img/aye-1.jpg",
      text: "lol the revenge of llolololo",
      bullets: ["reason1", "reason2", "reason3"],
    },
    "clases-de-automaquillaje": {
      title: "Clases de automaquillaje",
      heroImg: "/img/aye-1.jpg",
      text: "lol the revenge of llolololo",
      bullets: ["reason1", "reason2", "reason3"],
    },
  };
  useEffect(() => {
    setService(services[params.id]);
  }, [params]);

  return (
    <main className="py-24">
      <Container>
        <h2 className="section-title">{service.title}</h2>
        <div className="">
          <img src={service.heroImg} alt="" className="" />
          <p>{service.text}</p>
        </div>
        <ul>
          {service?.bullets?.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </Container>
    </main>
  );
}
