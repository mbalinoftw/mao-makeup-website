import { GiDiamondRing, GiTiara, GiGraduateCap, GiPhotoCamera } from "react-icons/gi";
import { BsStars } from "react-icons/bs";
import ServiceCard from "./ServiceCard";
import { services } from '../utils/utils';

export default function Services() {
  return (
    <section className="py-24" id="servicios">
      <div className="max-w-screen-lg mx-auto px-4">
        <h2 className="section-title">Servicios</h2>
        <ul className="flex flex-wrap justify-center gap-4">
          {services.map(({ thumbnail, srcset, sizes, icon, title, description }, index) => (
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
          ))}
        </ul>
      </div>
    </section>
  );
}
