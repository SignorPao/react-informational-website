import React from "react";

// import swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";

// import data
// import { headerData } from "../data/data";

const HeaderCarousel = () => {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      slidesPerView={1}
      spaceBetween={0}
      effect={"fade"}
      loop={"true"}
      autoplay={{
        delay: 6000,
        // disableOnInteraction: true,
        // pauseOnMouseEnter: false,
      }}
      className="w-full h-full"
    >
      <SwiperSlide className="bg-hero1 bg-cover bg-bottom bg-no-repeat w-full h-full">
        <div className="w-full h-full flex items-center justify-center">
          <h1 className="text-9xl text-accent font-semibold">Интерьер</h1>
        </div>
      </SwiperSlide>

      <SwiperSlide className="bg-hero2 bg-cover bg-bottom bg-no-repeat w-full h-full">
        <div className="w-full h-full flex items-center justify-center">
          <h1 className="text-9xl text-accent font-semibold">Сад и огород</h1>
        </div>
      </SwiperSlide>
      
      <SwiperSlide className="bg-hero3 bg-cover bg-bottom bg-no-repeat w-full h-full">
        <div className="w-full h-full flex items-center justify-center">
          <h1 className="text-9xl text-accent font-semibold">
            Стройматериалы
          </h1>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeaderCarousel;
