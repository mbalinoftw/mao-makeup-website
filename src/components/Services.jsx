import { Suspense, lazy } from "react";
import { GiDiamondRing, GiTiara, GiGraduateCap, GiPhotoCamera } from "react-icons/gi";
import { BsStars } from "react-icons/bs";
const ServiceCard = lazy(() => import("./ServiceCard"));

export default function Services() {
  const services = [
    {
      thumbnail: "/img/services-novias.webp",
      srcset: "/img/services-novias-sm.webp 288w, /img/services-novias-md.webp 576w, /img/services-novias.webp 720w",
      sizes: "(min-width: 560px) 288px, calc(49.58vw + 20px)",
      icon: <GiDiamondRing />,
      title: "novias",
      description:
        "Disfrutá de una experiencia de maquillaje y peinado profesional para que te sientas una novia hermosa y segura.",
    },
    {
      thumbnail: "/img/services-quinces.webp",
      srcset:
        "/img/services-quinces-sm.webp 288w, /img/services-quinces-md.webp 576w, /img/services-quinces.webp 1080w",
      sizes: "(min-width: 380px) 288px, calc(58.33vw + 78px)",
      icon: <GiTiara />,
      title: "15 años",
      description:
        "Merecés una noche inolvidable. Celebrá tu fiesta de quince con un look que hará que brilles como nunca.",
    },
    {
      thumbnail: "/img/services-sociales.webp",
      srcset:
        "/img/services-sociales-sm.webp 288w, /img/services-sociales-md.webp 576w, /img/services-sociales.webp 1080w",
      sizes: "(min-width: 380px) 288px, calc(58.33vw + 78px)",
      icon: <BsStars />,
      title: "sociales",
      description:
        "¿Cumpleaños, fiestas de egresados, eventos? Que tu belleza sea el centro de atención en cualquier ocasión.",
    },
    {
      thumbnail: "/img/services-producciones.webp",
      srcset:
        "/img/services-producciones-sm.webp 288w, /img/services-producciones-md.webp 576w, /img/services-producciones.webp 1280w",
      sizes: "(min-width: 380px) 288px, calc(33.33vw + 168px)",
      icon: <GiPhotoCamera />,
      title: "producciones",
      description: "Te ayudo a conseguir un efecto profesional en tus sesiones de fotos y producciones audiovisuales.",
    },
    {
      thumbnail: "/img/services-automaquillaje.webp",
      srcset:
        "/img/services-automaquillaje-sm.webp 288w, /img/services-automaquillaje-md.webp 576w, /img/services-automaquillaje.webp 1280w",
      sizes: "(min-width: 380px) 288px, calc(33.33vw + 168px)",
      icon: <GiGraduateCap />,
      title: "cursos",
      description:
        "Aprendé todos los secretos y técnicas para realzar tu belleza todos los días con mi curso de automaquillaje.",
    },
  ];

  return (
    <section className="py-24" id="servicios">
      <div className="max-w-screen-lg mx-auto px-4">
        <h2 className="section-title">Servicios</h2>
        <ul className="flex flex-wrap justify-center gap-4">
          {services.map(({ thumbnail, srcset, sizes, icon, title, description }, index) => (
            <Suspense>
              <ServiceCard
                key={title}
                thumbnail={thumbnail}
                srcset={srcset}
                sizes={sizes}
                icon={icon}
                title={title}
                description={description}
                index={index}
              />
            </Suspense>
          ))}
        </ul>
      </div>
    </section>
  );
}
