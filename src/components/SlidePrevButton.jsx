import { FaChevronCircleLeft } from "react-icons/fa";
import { useSwiper } from "swiper/react";

export default function SlidePrevButton() {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slidePrev()}>
      <FaChevronCircleLeft className="text-4xl md:text-5xl text-[#D1AAAB] rounded-full bg-white" />
    </button>
  );
}
