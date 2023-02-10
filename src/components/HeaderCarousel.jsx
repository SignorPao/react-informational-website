import React from "react";

// import swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,EffectFade } from "swiper";
import "swiper/css";
import 'swiper/css/effect-fade'

const HeaderCarousel = () => {
  return (
    <Swiper
      modules={[Autoplay,EffectFade]}
      slidesPerView={1}
      spaceBetween={0}
      effect={"fade"}
      loop={"true"}
      autoplay={{
        delay: 3000,
        // disableOnInteraction: true,
        // pauseOnMouseEnter: false,
      }}
      className="w-full h-full"
    >
      <SwiperSlide className="bg-red-300 w-full h-full flex items-center justify-center text-9xl ">
        1
      </SwiperSlide>
      <SwiperSlide className="bg-blue-300 flex items-center justify-center text-9xl w-full h-full">
        2
      </SwiperSlide>
      <SwiperSlide className="bg-green-300 flex items-center justify-center text-9xl w-full h-full">
        3
      </SwiperSlide>
    </Swiper>
  );
};

export default HeaderCarousel;
