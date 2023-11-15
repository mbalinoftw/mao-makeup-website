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
    },
    {
      thumbnail: "/img/quinces/265991269_621320598904645_8482986475709278680_n.jpg",
      icon: <GiTiara />,
      title: "15 años",
      description:
        "Merecés una noche inolvidable. Celebrá tu fiesta de quince con un look que hará que brilles como nunca.",
    },
    {
      thumbnail: "/img/sociales/337323979_232625065802001_4733831277775500009_n.jpg",
      icon: <BsStars />,
      title: "sociales",
      description:
        "¿Cumpleaños, fiestas de egresados, eventos? Que tu belleza sea el centro de atención en cualquier ocasión.",
    },
    {
      thumbnail: "/img/sociales/asd.jpeg",
      icon: <GiPhotoCamera />,
      title: "producciones",
      description: "Te ayudo a conseguir un efecto profesional en tus sesiones de fotos y producciones audiovisuales.",
    },
    {
      thumbnail: "/img/sociales/IMG_5290.jpg",
      icon: <GiGraduateCap />,
      title: "cursos",
      description: "Aprendé todos los secretos y técnicas para realzar tu belleza todos los días con mi curso de automaquillaje.",
    },
  ];

  return (
    <section className="py-20" id="servicios">
      <div className="max-w-screen-lg mx-auto px-4">
        <h2 className="section-title">Servicios</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {services.map(({ thumbnail, icon, title, description }) => (
            <ServiceCard key={title} thumbnail={thumbnail} icon={icon} title={title} description={description} />
          ))}
        </div>
      </div>
    </section>
  );
}
