/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import swiper1 from 'public/wang/swiper1.jpeg';
import swiper2 from 'public/wang/swiper2.jpg';
import swiper3 from 'public/wang/swiper3.jpg';
import swiper4 from 'public/wang/swiper4.jpg';
import swiper5 from 'public/wang/swiper5.jpg';
import swiper6 from 'public/wang/swiper6.jpg';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
export default function Swipe() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        slidesPerView={1.2}
        // spaceBetween={10}
        centeredSlides={true}
        slidesPerGroup={1}
        loop={true}
        // loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        coverflowEffect={{
          rotate: 0, // Slide rotate in degrees
          stretch: 40, // Stretch space between slides (in px)
          depth: 300, // Depth offset in px (slides translate in Z axis)
          modifier: 1, // Effect multipler
          slideShadows: true
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={swiper1.src} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiper2.src} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiper3.src} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiper4.src} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiper5.src} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiper6.src} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
