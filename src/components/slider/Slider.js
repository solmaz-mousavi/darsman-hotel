import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./slider.css";

export default function Slider({ slides }) {
  return (
    <Swiper slidesPerView={1} pagination={{ clickable: true }} loop={true}>
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <img src={slide.image} alt="darsman hotel" className="slide-img" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
