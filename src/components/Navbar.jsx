import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import { navbarLinks, socialLinks } from "../utils/utils";
import { FaBars, FaTimes } from "react-icons/fa";

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
        className={`py-4 fixed z-10 top-0 left-0 right-0 bg-[#E5C5C6]/90 transform ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } transition duration-500`}>
        <Container>
          <div className="flex items-center justify-between">
            <a href="#" className="">
              <img srcSet="logo.png" alt="mao makeup logo" className="object-cover w-32" />
            </a>
            <ul className="hidden md:flex items-center gap-4">
              {navbarLinks.map((link, index) => (
                <li key={index} className="">
                  <a href={link.url} className="capitalize text-white text-lg hover:text-[#D3898A]">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="hidden md:flex items-center">
              {socialLinks.map((link, index) => (
                <li key={index} className="">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-8 h-8 hidden md:grid md:place-items-center text-white rounded-full`}>
                    <i className={`fa-brands fa-${link.label} text-[${link.color}] text-2xl opacity-70`}></i>
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
        <div className="h-screen fixed z-20 inset-0 bg-[#E0AEAD] overflow-hidden" id="mobile-menu">
          <div className="container mx-auto p-6 flex justify-end">
            <button
              className="relative z-50 top-3 text-white md:hidden text-2xl"
              id="close-btn"
              onClick={() => setIsOpen(false)}>
              <FaTimes />
            </button>
          </div>
          <div className="md:hidden absolute top-0 left-0 h-full w-full grid place-items-center">
            <a href="#" className="animate__animated animate__fadeIn absolute top-16">
              <img src="logo-mobile.png" alt="logo" className="object-cover w-24" />
            </a>
            <ul className="md:hidden flex flex-col text-center text-3xl text-white" id="mobile-links">
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
    </>
  );
}
