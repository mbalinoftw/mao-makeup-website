// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import Container from "./Container";
import { ImQuotesLeft } from "react-icons/im";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import { testimonials } from '../utils/utils';

export default function Testimonials() {
  return (
    <section className="py-24 relative" id="testimonios">
      <Container>
        <h2 className="section-title">Testimonios</h2>
        <Swiper
          modules={[Navigation, Autoplay]}
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
              <div className="relative mt-8 px-6 py-8 min-h-[9rem] flex items-center bg-white rounded-md shadow-md ">
                <ImQuotesLeft className="absolute z-50 -top-4 left-4 text-4xl" />
                <p className="pb-2 italic">{t.text}</p>
                <span className="absolute bottom-4 right-6 font-bold">{t.client}</span>
              </div>
            </SwiperSlide>
          ))}
          <div className="p-6 flex justify-center gap-8">
            <SlidePrevButton />
            <SlideNextButton />
          </div>
        </Swiper>
      </Container>
    </section>
  );
}

function SlidePrevButton() {
  const swiper = useSwiper();

  return (
    <button aria-label="testimonio anterior" onClick={() => swiper.slidePrev()}>
      <FaChevronCircleLeft className="text-4xl md:text-5xl text-[#D1AAAB] rounded-full bg-white" />
    </button>
  );
}

function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <button aria-label="siguiente testimonio" onClick={() => swiper.slideNext()}>
      <FaChevronCircleRight className="text-4xl md:text-5xl text-[#D1AAAB] rounded-full bg-white" />
    </button>
  );
}
