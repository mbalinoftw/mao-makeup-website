import React from "react";
import Container from "./Container";
import { navbarLinks, socialLinks } from "../utils/utils";

export default function Footer() {
  return (
    <footer className="pt-16 pb-4 bg-[#E5C5C6]">
      <Container>
        <div className="flex flex-col items-center gap-4">
          <a href="#" className="">
            <img loading="lazy" src="logo-mobile.png" alt="mao makeup logo" className="object-cover w-32" />
          </a>
          <ul className="flex-1 flex justify-center gap-4">
            {socialLinks.map((link, index) => (
              <li key={index} className="">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Ir a ${link.label}`}
                  className={`grid place-items-center text-white rounded-full`}>
                  <i className={`fa-brands fa-${link.label} text-white text-5xl opacity-70`}></i>
                </a>
              </li>
            ))}
          </ul>
          <div className="grid place-items-center">
            <ul className="flex items-center justify-center gap-4 flex-wrap">
              {navbarLinks.map((link, index) => (
                <li key={link.label}>
                  <a href={link.url} className="text-[#363636] lg:text-lg hover:text-slate-200 capitalize">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <span className="text-center">
            ©{new Date().getFullYear()} MAO Makeup & Hairstyle. Todos los derechos reservados.
          </span>
        </div>
      </Container>
    </footer>
  );
}
