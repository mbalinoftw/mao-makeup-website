// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Container from "./Container";
import { ImQuotesLeft } from "react-icons/im";

// Import Swiper styles
import "swiper/css";
import SlideNextButton from "./SlideNextButton";
import SlidePrevButton from "./SlidePrevButton";

export default function Testimonials() {
  const testimonials = [
    {
      text: "Que genia, duró impecable mil horas. Gracias ❤️❤️❤️❤️❤️",
      client: "@benditamisuerte",
    },
    {
      text: "Súper recomendable!! Es una genia!!",
      client: "@norasciambarella",
    },
    {
      text: "Genia total. Gracias aye por todo ❤️",
      client: "@juli_cop",
    },
    {
      text: "Hermoso todo ❤️ Gracias!!",
      client: "@neriortiz_",
    },
    {
      text: "Ame mi peinado!!!!! ❤️❤️❤️",
      client: "@euge.pedemonte",
    },
    {
      text: "Gracias aye! 😍 me quiero volver a casar para que me vuelvas a peinar 😂",
      client: "@belii.a",
    },
    {
      text: "Grosaaaa aye!!! Te pasaste!!! Ame el make up y peinado… me duró todaaa la fiesta 🙌🔥.",
      client: "@belii.a",
    },
    {
      text: "Gracias por tan hermoso peinado y sobre todo tu buena onda❤️",
      client: "@melisamedero",
    },
    {
      text: "hermoso maquillaje y peinado❤️😘🥰",
      client: "@pilibte",
    },
  ];

  return (
    <section className="relative">
      <Container>
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-none text-[#363636]">
            Clientas contentas
          </h2>
        </div>
        <Swiper
          modules={[Navigation]}
          loop
          navigation
          autoplay={{
            delay: 3000,
          }}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            700: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}>
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="relative mt-8 px-6 py-8 min-h-[9rem] flex items-center bg-white rounded-md shadow-md text-[#363636]">
                <ImQuotesLeft className="absolute z-50 -top-4 left-4 text-4xl" />
                <p className="pb-2 italic">{t.text}</p>
                <span className="absolute bottom-4 right-6 font-bold">{t.client}</span>
              </div>
            </SwiperSlide>
          ))}
          <div className="p-6 flex justify-between md:justify-center md:gap-8">
            <SlidePrevButton />
            <SlideNextButton />
          </div>
        </Swiper>
      </Container>
    </section>
  );
}
