import { useRef, useState } from "react";
import Container from "./Container";
import { BsFillSendFill } from "react-icons/bs";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({});
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.25, once: true });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.fecha = formData?.fecha?.split("-").reverse().join("/");

    const url = `https://wa.me/+5491164256355?text=_¡Hola, gracias por contactarme!_%0a%0a
    Nombre: *${formData?.nombre?.toUpperCase()}*%0a
    Servicio: *${formData?.servicio?.toUpperCase()}*%0a
    Cantidad: *${formData?.cantidad} personas*%0a
    Ubicación *${formData?.lugar?.toUpperCase()}*%0a
    Fecha y Hora: *${formData?.fecha}* - *${formData?.hora}hs*%0a
    Teléfono: *${formData?.telefono}*%0a
    Comentarios: %0a${formData?.comentarios}`;

    window.open(url, "_blank").focus();
  };

  return (
    <section id="contacto" className="py-24 bg-slate-200">
      <Container>
        <h2 className="section-title">Contacto</h2>
        <div className="md:col-span-2">
          <form
            ref={ref}
            style={{
              transform: isInView ? "translateY(0)" : "translateY(-2rem)",
              opacity: isInView ? 1 : 0,
              transition: "all .5s",
              transitionDelay: ".3s",
            }}
            onSubmit={handleSubmit}
            className="px-6 py-8 grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-100 rounded-md">
            <div className="col-span-2 flex flex-col justify-center">
              <h3 className="text-2xl text-center">¡Hablemos!</h3>
              <div className="flex items-center justify-center gap-4">
                <a
                  href="https://wa.me/+5491164256355"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Contactame por WhatsApp"
                  className="mt-4 px-6 lg:px-8 py-2 lg:py-3 inline-flex items-center justify-center gap-2 text-white bg-[#24D366] rounded-full">
                  <i className="fa-brands fa-whatsapp text-2xl lg:text-3xl"></i>
                </a>
                <a
                  href="https://www.instagram.com/direct/t/103810497685454/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Contactame por Instagram"
                  className="mt-4 px-6 lg:px-8 py-2 lg:py-3 inline-flex items-center justify-center gap-2 text-white bg-[#AB30B3] rounded-full">
                  <i className="fa-brands fa-instagram text-2xl lg:text-3xl"></i>
                </a>
              </div>
            </div>
            <div className="col-span-2 text-center flex flex-col gap-2">
              <hr className="my-4 w-1/2 mx-auto" />
              <p className="text-xs">O completá el formulario a continuación para brindarte un mejor servicio</p>
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col">
              <label className="mb-1 text-xs uppercase" htmlFor="nombre">
                Nombre
              </label>
              <input
                required
                className="p-1.5 rounded-md"
                name="nombre"
                id="nombre"
                value={formData?.nombre}
                onChange={handleChange}
              />
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col">
              <label className="mb-1 text-xs uppercase" htmlFor="telefono">
                Teléfono
              </label>
              <input
                required
                className="p-1.5 rounded-md"
                name="telefono"
                id="telefono"
                type="tel"
                inputMode="numeric"
                value={formData?.telefono}
                onChange={handleChange}
              />
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col">
              <label className="mb-1 text-xs uppercase" htmlFor="servicio">
                Servicio
              </label>
              <div>
                <select
                  required
                  autoComplete
                  className="p-1.5 rounded-md w-full"
                  id="servicio"
                  name="servicio"
                  value={formData?.servicio}
                  onChange={handleChange}>
                  <option value="none">Seleccionar</option>
                  <option value="novia">Novia</option>
                  <option value="quince-años">15 Años</option>
                  <option value="social">Social</option>
                  <option value="glitter-bar">Glitter Bar</option>
                  <option value="sesion-de-fotos">Sesión de fotos</option>
                  <option value="clase-de-automaquillaje">Clase de Automaquillaje</option>
                </select>
              </div>
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col">
              <label className="mb-1 text-xs uppercase" htmlFor="cantidad">
                Cantidad
              </label>
              <div className="relative flex items-center">
                <input
                  required
                  type="number"
                  id="cantidad"
                  name="cantidad"
                  min="1"
                  value={formData?.cantidad}
                  inputMode="numeric"
                  className="w-full p-1.5 rounded-md"
                  onChange={handleChange}
                />
                <span className="absolute left-7 text-sm uppercase">
                  {formData.cantidad == 1 ? "persona" : "personas"}
                </span>
              </div>
            </div>
            <div className="col-span-2 md:col-span-1 flex items-center justify-between gap-2">
              <div className="w-full flex flex-col">
                <label className="mb-1 text-xs uppercase" htmlFor="fecha">
                  Fecha
                </label>
                <input
                  required
                  className="p-1.5 rounded-md"
                  name="fecha"
                  id="fecha"
                  type="date"
                  value={formData?.fecha}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full flex flex-col">
                <label className="mb-1 text-xs uppercase" htmlFor="hora">
                  Hora
                </label>
                <input
                  required
                  className="p-1.5 rounded-md"
                  name="hora"
                  id="hora"
                  type="time"
                  value={formData?.hora}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col">
              <label className="mb-1 text-xs uppercase" htmlFor="lugar">
                Ubicación / Zona
              </label>
              <input
                required
                className="p-1.5 rounded-md"
                name="lugar"
                id="lugar"
                type="text"
                value={formData?.lugar}
                onChange={handleChange}
              />
            </div>
            <div className="col-span-2 flex flex-col">
              <label className="mb-1 text-xs uppercase" htmlFor="comentarios">
                Comentarios
              </label>
              <textarea
                className="p-1.5 rounded-md"
                name="comentarios"
                id="comentarios"
                value={formData?.comentarios}
                onChange={handleChange}></textarea>
            </div>
            <button
              className="mt-2 py-3 col-span-2 w-full md:w-1/2 mx-auto flex items-center justify-center gap-2 rounded-full bg-black text-white"
              type="submit"
              aria-label="Enviar por WhatsApp">
              <BsFillSendFill />
              <span className="">Enviar por WhatsApp</span>
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
