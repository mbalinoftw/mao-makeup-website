import React from "react";

export default function Hero() {
  return (
    <section className="py-20">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto gap-4 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-6">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-6xl xl:text-7xl">
            El makeup perfecto para tus eventos sociales
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
            Te ayudo a resaltar tu estilo para
          </p>
          <div className="flex flex-col md:flex-row">
            <a
              href="#"
              className="px-4 lg:px-8 py-2 lg:py-3 inline-flex items-center justify-center gap-2 text-white bg-green-500 rounded-md">
              <i className="fa-brands fa-whatsapp text-2xl lg:text-3xl"></i>
              <span className="text-lg lg:text-xl">Contactame</span>
            </a>
            <a
              href="#"
              className="px-4 lg:px-8 py-2 lg:py-3 inline-flex items-center justify-center gap-2 text-gray-700 bg-transparent rounded-md">
              <i className="fa-solid fa-heart text-2xl lg:text-3xl"></i>
              <span className="text-lg lg:text-xl">Ver mis trabajos</span>
            </a>
          </div>
        </div>
        <div className="lg:mt-0 lg:col-span-6 lg:flex">
          <img className='p-4 rounded-md shadow-lg' src={"/img/344852031_126269637112257_101586932476997810_n.jpg"} alt="hero image" />
        </div>
      </div>
    </section>
  );
}
