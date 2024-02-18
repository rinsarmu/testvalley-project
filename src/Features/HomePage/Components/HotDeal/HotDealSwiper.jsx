import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "./styles.css";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import HotDealCard from "./HotDealCard";

export default function HotDealSwiper({ data }) {
    // console.log({ data })
    return (
        <div className=" w-full">

            <Swiper watchSlidesProgress={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                slidesPerView={4}
                loop={true}

                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                <div className="flex flex-row gap-4">
                    {data && data.length > 0 && data.map((d, index) => (
                        <SwiperSlide>
                            <HotDealCard data={d} />
                        </SwiperSlide>


                    ))}
                </div>

            </Swiper>
        </div>
    );
}
