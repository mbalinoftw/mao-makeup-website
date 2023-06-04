import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navbarLinks = [
    {
      label: "inicio",
      url: "",
    },
    {
      label: "acerca de mí",
      url: "",
    },
    {
      label: "servicios",
      url: "",
    },
    {
      label: "galería",
      url: "",
    },
    {
      label: "contacto",
      url: "",
    },
  ];

  const socialLinks = [
    {
      label: "whatsapp",
      url: "https://wa.me/5491123534749",
    },
    {
      label: "instagram",
      url: "https://www.instagram.com/maomakeup_beauty/",
    },
  ];

  return (
    <nav className="fixed z-10 top-0 left-0 right-0 bg-white">
      <div className="max-w-screen-xl mx-auto p-6 flex items-center justify-between">
        <a href="#" className="">
          <img src="logo-light.png" alt="logo" className="object-cover w-24 mix-blend-multiply" />
        </a>
        <ul className="hidden md:flex items-center gap-4">
          {navbarLinks.map((link, index) => (
            <li key={index} className="">
              <a href={link.url}>{link.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-1">
          <a href="#" className="w-12 h-12 hidden md:grid md:place-items-center text-white bg-green-500 rounded-full">
            <i className="fa-brands fa-whatsapp text-2xl"></i>
          </a>
          <a href="#" className="w-12 h-12 hidden md:grid md:place-items-center text-white bg-purple-500 rounded-full">
            <i className="fa-brands fa-instagram text-2xl"></i>
          </a>
        </div>
        <button className="block md:hidden text-2xl" id="open-btn" onClick={() => setIsOpen(true)}>
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
      {isOpen ? (
        <div className="h-screen fixed inset-0 bg-[#E0AEAD] overflow-hidden" id="mobile-menu">
          <div className="container mx-auto p-6 flex justify-end">
            <button
              className="relative z-50 top-3 text-white md:hidden text-2xl"
              id="close-btn"
              onClick={() => setIsOpen(false)}>
              <i className="fa-solid fa-times"></i>
            </button>
          </div>
          <div className="absolute top-0 left-0 h-full w-full grid place-items-center">
            <a href="#" className="animate__animated animate__fadeIn absolute top-16">
              <img src="logo-light2.png" alt="logo" className="object-cover w-48" />
            </a>
            <ul className="md:hidden flex flex-col gap-10 text-center text-3xl text-white" id="mobile-links">
              {navbarLinks.map((link, index) => (
                <li
                  key={index}
                  className="animate__animated animate__fadeInUp text-xl font-bold hover:text-gray-500"
                  style={{ animationDelay: `${index * 0.1}s` }}>
                  <a href={link.url}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <ul className="absolute md:hidden left-0 bottom-0 w-full flex items-center justify-center gap-8 p-6">
            {socialLinks.map((link, index) => (
              <li
                key={index}
                className="animate__animated animate__fadeInUp p-2 text-white text-4xl rounded-full bg-transparent"
                style={{ animationDelay: `${index * 0.1 + 0.3}s` }}>
                <a href={link.url} target="_blank" rel="noreferrer" className="">
                  <i className={`fa-brands fa-${link.label}`}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </nav>
  );
}
