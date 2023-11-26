import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import { navbarLinks, socialLinks } from "../utils/utils";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

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
        className={`py-4 fixed z-50 top-0 left-0 right-0 bg-slate-100 transition duration-500 transform 
        ${isVisible ? `translate-y-0` : "-translate-y-full"}`}>
        <Container>
          <div className="flex items-center justify-between">
            <a href="#">
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                width="128px"
                height="42px"
                src="logo.png"
                alt="mao makeup logo"
                className="object-cover w-32"
              />
            </a>
            <ul className="hidden md:flex items-center gap-4">
              {navbarLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: `${1.1 + index * 0.1}`, duration: 0.5 }}>
                  <a href={link.url} className="text-[#363636] lg:text-lg hover:text-[#D3898A] capitalize">
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <ul className="hidden md:flex items-center">
              {socialLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: `${1.5 + index * 0.1}`, duration: 0.5 }}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Ir a ${link.label}`}
                    className={`w-8 h-8 hidden md:grid md:place-items-center text-[#363636] hover:text-[#D3898A] rounded-full`}>
                    <i className={`fa-brands fa-${link.label} text-2xl opacity-70`}></i>
                  </a>
                </motion.li>
              ))}
            </ul>
            <button
              aria-label="Abrir menú de navegación"
              className="block md:hidden text-2xl"
              id="open-btn"
              onClick={() => setIsOpen(true)}>
              <FaBars />
            </button>
          </div>
        </Container>
      </nav>
      {isOpen ? (
        <div className="h-screen fixed z-50 inset-0 bg-[#E0AEAD] overflow-hidden" id="mobile-menu">
          <div className="container mx-auto p-4 flex justify-end">
            <button
              aria-label="Cerrar menú de navegación"
              className="relative z-50 top-2 text-[#363636] md:hidden text-2xl"
              id="close-btn"
              onClick={() => setIsOpen(false)}>
              <FaTimes />
            </button>
          </div>
          <div className="md:hidden absolute top-0 left-0 h-full w-full grid place-items-center">
            <motion.a
              href="#"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="absolute top-16">
              <img src="/logo-mobile.png" alt="logo" className="object-cover w-24" />
            </motion.a>
            <ul className="md:hidden flex flex-col text-center text-3xl text-[#363636]" id="mobile-links">
              {navbarLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: `${0.1 + index * 0.1}`, duration: 0.3 }}
                  className="p-2 text-xl font-bold hover:text-gray-500 capitalize">
                  <a className="text-[#363636]" href={link.url} onClick={() => setIsOpen(false)}>
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
          <ul className="absolute md:hidden left-0 bottom-0 w-full flex items-center justify-center gap-8 p-6">
            {socialLinks.map((link, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: `${0.5 + index * 0.1}`, duration: 0.3 }}
                className="p-2 text-slate-100 text-4xl rounded-full bg-transparent"
                style={{ animationDelay: `${index * 0.1 + 0.3}s` }}>
                <a href={link.url} target="_blank" rel="noreferrer" className="text-slate-100 hover:text-[#D3898A]">
                  <i className={`fa-brands fa-${link.label}`}></i>
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
}
