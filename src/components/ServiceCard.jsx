import { motion } from "framer-motion";
import { fadeInItems } from "../utils/animationVariants";

export default function ServiceCard({ thumbnail, title, icon, description, index }) {
  return (
    <motion.li
      variants={fadeInItems}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
      className="group w-72 flex flex-col bg-white rounded-md hover:shadow-md transition-shadow duration-300">
      <div className="overflow-hidden rounded-t-md">
        <img
          src={thumbnail}
          alt={title}
          className="object-center object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col items-center justify-center rounded-b-md bg-white text-center">
        <div className="mb-2 w-10 h-10 md:w-12 md:h-12 grid place-items-center rounded-full bg-[#E5C5C6] text-white">
          <i className="text-xl md:text-2xl">{icon}</i>
        </div>
        <h3 className="mb-2 text-2xl uppercase">{title}</h3>
        <p className="">{description}</p>
      </div>
    </motion.li>
  );
}
