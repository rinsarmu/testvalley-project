import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


export default function HeroCard({ data }) {
  console.log({ dd: data })
  return (
    <>
      <Swiper

        slidesPerView={1.6}
        spaceBetween={30} // Adjust the value as per your requirement
        centeredSlides={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >


        {data && data.length > 0 && data.map((d, index) => (
          <SwiperSlide key={index} className="swiper-slide-custom ">
            <img src={d.pcImageUrl} alt="" className="swiper-slide-image " />
          </SwiperSlide>
        ))}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>

        {/* <div className="swiper-button-prev"></div> */}



      </Swiper >
    </>
  );
}
