import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import { navbarLinks, socialLinks } from "../utils/utils";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const lastScrollTop = useRef(0);

  const handleScroll = () => {
    const { pageYOffset } = window;
    if (pageYOffset > 50 && pageYOffset > lastScrollTop.current) {
      setIsVisible(false);
    } else if (pageYOffset < lastScrollTop.current) {
      setIsVisible(true);
    }
    lastScrollTop.current = pageYOffset;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <>
      <nav
        className={`font-hero py-4 fixed z-50 top-0 left-0 right-0 bg-slate-100 transition duration-500 transform 
        ${isVisible ? `translate-y-0` : "-translate-y-full"}`}>
        <Container>
          <div className="flex items-center justify-between">
            <Link to="/" className="">
              <img src="logo.png" alt="mao makeup logo" className="object-cover w-32" />
            </Link>
            <ul className="hidden md:flex items-center gap-4">
              <li className="">
                <a href="#" className="text-[#363636] lg:text-lg hover:text-[#D3898A]">
                  Inicio
                </a>
              </li>
              <li className="relative group py-2">
                <h3 className="text-[#363636] lg:text-lg hover:text-[#D3898A] cursor-pointer"><a href="#servicios">Servicios</a></h3>
                <ul className="hidden group-hover:block absolute w-64 top-1 left-0 mt-8 px-6 py-4 bg-slate-50 text-[#363636] rounded-md shadow-lg">
                  <li className="">
                    <Link to="/servicios/novias" className="text-sm hover:text-[#D3898A]">
                      Novias
                    </Link>
                  </li>
                  <li className="">
                    <Link to="/servicios/quince-anos" className="text-sm hover:text-[#D3898A]">
                      15 Años
                    </Link>
                  </li>
                  <li className="">
                    <Link to="/servicios/sociales" className="text-sm hover:text-[#D3898A]">
                      Sociales
                    </Link>
                  </li>
                  <li className="">
                    <Link to="/servicios/glitter-bar" className="text-sm hover:text-[#D3898A]">
                      Glitter bar
                    </Link>
                  </li>
                  <li className="">
                    <Link to="/servicios/sesion-de-fotos" className="text-sm hover:text-[#D3898A]">
                      Sesión de fotos
                    </Link>
                  </li>
                  <li className="">
                    <Link to="/servicios/clases-de-automaquillaje" className="text-sm hover:text-[#D3898A]">
                      Clases de Automaquillaje
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="">
                <a href="/#acerca-de-mi" className="text-[#363636] lg:text-lg hover:text-[#D3898A]">
                  Acerca de mi
                </a>
              </li>
              <li className="">
                <a href="/#contacto" className="text-[#363636] lg:text-lg hover:text-[#D3898A]">
                  Contacto
                </a>
              </li>
            </ul>
            <ul className="hidden md:flex items-center">
              {socialLinks.map((link, index) => (
                <li key={index} className="">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-8 h-8 hidden md:grid md:place-items-center text-[#363636] rounded-full`}>
                    <i className={`fa-brands fa-${link.label} text-2xl opacity-70`}></i>
                  </a>
                </li>
              ))}
            </ul>
            <button className="block md:hidden text-2xl" id="open-btn" onClick={() => setIsOpen(true)}>
              <FaBars />
            </button>
          </div>
        </Container>
      </nav>
      {isOpen ? (
        <div className="h-screen fixed z-50 inset-0 bg-[#E0AEAD] overflow-hidden" id="mobile-menu">
          <div className="container mx-auto p-6 flex justify-end">
            <button
              className="relative z-50 top-3 text-[#363636] md:hidden text-2xl"
              id="close-btn"
              onClick={() => setIsOpen(false)}>
              <FaTimes />
            </button>
          </div>
          <div className="md:hidden absolute top-0 left-0 h-full w-full grid place-items-center">
            <a href="#" className="animate__animated animate__fadeIn absolute top-16">
              <img src="logo-mobile.png" alt="logo" className="object-cover w-24" />
            </a>
            <ul className="md:hidden flex flex-col text-center text-3xl text-[#363636]" id="mobile-links">
              {navbarLinks.map((link, index) => (
                <li
                  key={index}
                  className="p-2 animate__animated animate__fadeInUp text-xl font-bold hover:text-gray-500 capitalize"
                  style={{ animationDelay: `${index * 0.1}s` }}>
                  <a href={link.url} onClick={() => setIsOpen(false)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <ul className="absolute md:hidden left-0 bottom-0 w-full flex items-center justify-center gap-8 p-6">
            {socialLinks.map((link, index) => (
              <li
                key={index}
                className="animate__animated animate__fadeInUp p-2 text-[#363636] text-4xl rounded-full bg-transparent"
                style={{ animationDelay: `${index * 0.1 + 0.3}s` }}>
                <a href={link.url} target="_blank" rel="noreferrer" className="">
                  <i className={`fa-brands fa-${link.label}`}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
}
