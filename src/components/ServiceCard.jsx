import { Link } from "react-router-dom";
import { MdOutlineArrowRightAlt } from "react-icons/md";

export default function ServiceCard({ service, i }) {
  return (
    <article className="">
      <Link
        to={service.url}
        className={`group flex flex-col ${
          i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
        } items-center cursor-pointer`}>
        <div className="md:w-1/2">
          <img src={service.thumbnail} alt={service.title} className="object-center object-cover" />
        </div>
        <div className="p-6 md:p-8 lg:p-12 md:w-1/2 flex flex-col items-center justify-center text-center">
          <div className="mb-2 w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 grid place-items-center rounded-full bg-[#E5C5C6] text-white">
            <i className="text-xl md:text-2xl lg:text-4xl">{service.icon}</i>
          </div>
          <h3 className="mb-2 text-2xl md:text-3xl lg:text-4xl font-hero uppercase">{service.title}</h3>
          <p className="lg:text-lg">{service.description}</p>
          <button className="mt-4 group relative inline-flex items-center gap-1 ">
            Ver más <MdOutlineArrowRightAlt />
          </button>
        </div>
      </Link>
    </article>
  );
}