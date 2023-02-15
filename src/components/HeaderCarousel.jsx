import React,{useRef} from "react";

// import swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";

// import data
// import { headerData } from "../data/data";

const HeaderCarousel = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

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
        // pauseOnMouseEnter: true,
      }}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      className="w-full h-full"
    >
      <SwiperSlide className="bg-hero1 bg-cover bg-bottom bg-no-repeat w-full h-full">
        <div className="w-full h-full flex items-center justify-center">
          <h1 className="heroTitle">Интерьер</h1>
        </div>
      </SwiperSlide>

      <SwiperSlide className="bg-hero2 bg-cover bg-bottom bg-no-repeat w-full h-full">
        <div className="w-full h-full flex items-center justify-center">
          <h1 className="heroTitle">Сад и огород</h1>
        </div>
      </SwiperSlide>

      <SwiperSlide className="bg-hero3 bg-cover bg-bottom bg-no-repeat w-full h-full">
        <div className="w-full h-full flex items-center justify-center">
          <h1 className="heroTitle">Стройматериалы</h1>
        </div>
      </SwiperSlide>

      <div className="autoplay-progress" slot="container-end">
        <svg viewBox="0 0 48 48" ref={progressCircle}>
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref={progressContent}></span>
      </div>
    </Swiper>
  );
};

export default HeaderCarousel;
