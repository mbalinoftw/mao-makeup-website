import React from "react";
import Container from "./Container";

export default function Footer() {
  const navbarLinks = [
    {
      label: "inicio",
      url: "#",
    },
    {
      label: "quién soy",
      url: "#about",
    },
    {
      label: "servicios",
      url: "#services",
    },
    {
      label: "galería",
      url: "#gallery",
    },
    {
      label: "contacto",
      url: "#contact",
    },
  ];

  const socialLinks = [
    {
      label: "whatsapp",
      url: "https://wa.me/+5491164256355",
      color: "#18B920",
    },
    {
      label: "instagram",
      url: "https://www.instagram.com/maomakeup_beauty/",
      color: "#AC3292",
    },
  ];

  return (
    <footer className="pt-16 pb-4 bg-[#E5C5C6]">
      <Container>
        <div className="flex flex-col items-center gap-4">
          <a href="#" className="">
            <img srcSet="logo-mobile.png" alt="mao makeup logo" className="object-cover w-32" />
          </a>
          <ul className="flex-1 flex justify-center gap-4">
            {socialLinks.map((link, index) => (
              <li key={index} className="">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`grid place-items-center text-white rounded-full`}>
                  <i className={`fa-brands fa-${link.label} text-white text-5xl opacity-70`}></i>
                </a>
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <ul className=""></ul>
          </div>
          <span className="text-center">
            ©{new Date().getFullYear()} MAO Makeup & Hairstyle. Todos los derechos reservados.
          </span>
        </div>
      </Container>
    </footer>
  );
}
