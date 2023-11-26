import { FaChevronCircleRight } from "react-icons/fa";
import { useSwiper } from "swiper/react";

export default function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <button aria-label="siguiente testimonio" onClick={() => swiper.slideNext()}>
      <FaChevronCircleRight className="text-4xl md:text-5xl text-[#D1AAAB] rounded-full bg-white" />
    </button>
  );
}
