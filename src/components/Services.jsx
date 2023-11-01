import Container from "./Container";
import { GiDiamondRing, GiTiara, GiGraduateCap, GiPhotoCamera } from "react-icons/gi";
import { BsStars } from "react-icons/bs";
import ServiceCard from "./ServiceCard";

export default function Services() {
  const services = [
    {
      thumbnail: "/img/novias/280595178_569166404590718_164566642631978337_n.jpg",
      icon: <GiDiamondRing />,
      title: "novias",
      description:
        "Disfrutá de una experiencia de maquillaje y peinado profesional para que te sientas una novia hermosa y segura.",
      url: "/servicios/novias",
    },
    {
      thumbnail: "/img/quinces/265991269_621320598904645_8482986475709278680_n.jpg",
      icon: <GiTiara />,
      title: "15 años",
      description:
        "Merecés una noche inolvidable. Celebrá tu fiesta de quince con un look que hará que brilles como nunca.",
      url: "/servicios/quinces",
    },
    {
      thumbnail: "/img/sociales/337323979_232625065802001_4733831277775500009_n.jpg",
      icon: <BsStars />,
      title: "sociales",
      description:
        "¿Cumpleaños, casamientos, fiestas de fin de año? Que tu belleza sea el centro de atención en cualquier ocasión.",
      url: "/servicios/sociales",
    },
    {
      thumbnail: "/img/sociales/337323979_232625065802001_4733831277775500009_n.jpg",
      icon: <GiPhotoCamera />,
      title: "sesión de fotos",
      description: "Te ayudo a conseguir un efecto profesional en tus fotos",
      url: "/servicios/sesion-de-fotos",
    },
    {
      thumbnail: "/img/aye-1.jpg",
      icon: <GiGraduateCap />,
      title: "clases de automaquillaje",
      description:
        "¿Querés aprender a maquillarte como una experta? Te enseño todos los secretos y técnicas necesarias para realzar tu belleza todos los días.",
      url: "/servicios/clases-de-automaquillaje",
    },
  ];

  return (
    <section className="py-16" id="servicios">
      <Container>
        <div className="text-center mb-12">
          <h2 className="section-title">Servicios</h2>
        </div>
        <div className="space-y-6 lg:space-y-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} i={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
