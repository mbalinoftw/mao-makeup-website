import Container from "./Container";
import { motion } from "framer-motion";
import img1 from "/img/hero-01.jpg";
import img2 from "/img/hero-02.jpg";
import img3 from "/img/hero-03.jpg";

export default function Hero() {
  return (
    <header className="pt-24 pb-16">
      <Container>
        <div className="grid place-items-center grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
          <div className="relative md:order-2 mt-4 md:col-span-7 grid grid-cols-6 items-center gap-2">
            <div className="col-span-3 space-y-2">
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2, duration: 0.5 }}
                className="relative w-2/3 ml-auto rounded-md shadow-lg bg-white p-1 md:p-2"
                src={img1}
                alt="hero image"
              />
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.1, duration: 0.5 }}
                className="relative rounded-md shadow-lg bg-white p-1 md:p-2 z-10"
                src={img2}
                alt="hero image"
              />
            </div>
            <div className="col-span-3">
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.2, duration: 0.5 }}
                className="rounded-md shadow-lg bg-white p-1 md:p-2"
                src={img3}
                alt="hero image"
              />
            </div>
          </div>
          <div className="py-6 md:py-0 md:col-span-5 text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0, translateY: "2rem" }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              className="font-mao text-xs md:text-normal lg:text-lg tracking-[.2rem] lg:tracking-[.4rem] uppercase select-none">
              mariela ayelen ordoñez
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, translateY: "2rem" }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ delay: 1.6, duration: 0.5 }}
              className="font-hero font-semibold text-[#363636] max-w-sm lg:max-w-full mb-4 text-5xl md:text-[3.7rem] lg:text-7xl xl:text-8xl tracking-tight select-none">
              makeup & hairstyle
            </motion.h1>
            <motion.a
              initial={{ opacity: 0, translateY: "2rem" }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ delay: 1.9, duration: 0.5 }}
              href="https://wa.me/+5491164256355"
              target="_blank"
              rel="noreferrer"
              className="mt-4 px-6 lg:px-8 py-2 lg:py-3 inline-flex items-center justify-center gap-2 text-white bg-[#D1AAAB] rounded-full">
              <i className="fa-brands fa-whatsapp text-2xl lg:text-3xl"></i>
              <span className="text-sm lg:text-xl">Reservá tu fecha</span>
            </motion.a>
          </div>
        </div>
      </Container>
    </header>
  );
}
