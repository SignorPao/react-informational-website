import React, { useRef } from "react";

// react-router
import { Link } from "react-router-dom";

// import swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";

const HeaderCarousel = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
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
        delay: 10000,
        // disableOnInteraction: true,
        // pauseOnMouseEnter: true,
      }}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      className="w-full h-full"
    >
      <SwiperSlide className="bg-hero1 bg-cover bg-bottom bg-no-repeat w-full h-full bg-dark/10 bg-blend-multiply">
        <div className="w-full h-full flex flex-col gap-y-1 lg:gap-y-4 items-center justify-center pt-16">
          <h1 className="heroTitle">Интерьер</h1>
          <p className="heroSubTitle">
            Советы для создания интерьера вашей мечты
          </p>
          <Link to={"interior"} className="btn">
            Читать
          </Link>
        </div>
      </SwiperSlide>

      <SwiperSlide className="bg-hero2 bg-cover bg-center bg-no-repeat w-full h-full bg-dark/10 bg-blend-multiply">
        <div className="w-full h-full flex flex-col gap-y-1 lg:gap-y-4 items-center justify-center pt-16">
          <h1 className="heroTitle">Сад и огород</h1>
          <p className="heroSubTitle">Статьи для содоводов и огородников</p>
          <Link
            to={"garden"}
            className="btn bg-secondary dark:bg-primary dark:text-light"
          >
            Читать
          </Link>
        </div>
      </SwiperSlide>

      <SwiperSlide className="bg-hero3 bg-cover bg-center bg-no-repeat w-full h-full bg-dark/10 bg-blend-multiply">
        <div className="w-full h-full flex flex-col gap-y-1 lg:gap-y-4 items-center justify-center pt-16">
          <h1 className="heroTitle">Стройматериалы</h1>
          <p className="heroSubTitle xl:w-1/2">
            Всё о лучших строительных материалах и технологиях
          </p>
          <Link
            to={"materials"}
            className="btn bg-secondary dark:bg-primary dark:text-light"
          >
            Читать
          </Link>
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
